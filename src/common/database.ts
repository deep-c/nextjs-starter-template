import {
    createConnection,
    getConnection as getDbConnection,
    Connection,
    ConnectionOptions,
    DatabaseType,
} from 'typeorm';

const entitiesChanged = (prevEntities, newEntities) => {
    if (prevEntities.length !== newEntities.length) return true;
    for (let i = 0; i < prevEntities.length; i++) {
        if (prevEntities[i] !== newEntities[i]) return true;
    }
    return false;
};

const updateConnectionEntities = async (connection, entities) => {
    // Check if the entities passed have changed and if so replace them
    // and re-sync the typeorm connection.
    if (!connection || !entitiesChanged(connection.options.entities, entities)) return;
    connection.options.entities = entities;
    connection.buildMetadatas();
    if (connection.options.synchronize) {
        await connection.synchronize();
    }
};

export const baseDbConfig = {
    type: process.env.TYPEORM_CONNECTION as DatabaseType,
    host: process.env.TYPEORM_HOST,
    port: (process.env.TYPEORM_PORT as unknown) as number,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: (process.env.TYPEORM_SYNCHRONIZE as unknown) as boolean,
};

let connection = null;

export const getConnection = async (options?: ConnectionOptions): Promise<Connection> => {
    // Helper function to reuse / restablish connections
    // (useful if they drop when after being idle)
    async function _connect() {
        // Get current connection by name
        connection = getDbConnection();

        // If connection is no longer established, reconnect
        if (!connection.isConnected) {
            connection = await connection.connect();
        }
    }

    if (!connection) {
        // If no connection, create new connection
        try {
            connection = await createConnection(options);
        } catch (error) {
            if (error.name === 'AlreadyHasActiveConnectionError') {
                // If creating connection fails because it's already
                // been re-established, check it's really up
                await _connect();
            } else {
                console.error('ADAPTER_CONNECTION_ERROR', error);
            }
        }
    } else {
        // If the connection object already exists, ensure it's valid
        await _connect();
    }

    if (process.env.NODE_ENV !== 'production' && options.entities) {
        // Resync entities on the connection in development HMR.
        await updateConnectionEntities(connection, options.entities);
    }

    return connection;
};
