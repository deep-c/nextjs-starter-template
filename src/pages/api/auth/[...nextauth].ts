import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import Adapters from "next-auth/adapters"
import Models from "models"

const options = {

}

export default (req, res) => NextAuth(req, res, options)