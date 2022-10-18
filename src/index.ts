import "reflect-metadata"
import { Container  } from "typedi"
import * as Typeorm from "typeorm"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import createSchema from "./schema"

Typeorm.useContainer(Container);

const bootStrap = async () => {
    try {
        await Typeorm.createConnection()
        const schema = await createSchema(Container)

        const Server = new ApolloServer({
            schema,
            context: ({req, res}) => ({ req, res }),
            debug: true,
            playground: true
        })
        const app = express();
        const port = 3000;

        Server.applyMiddleware({app});

        app.listen({port}, () => {
            console.log(
                `serveris ready at http://localhost:${port}${Server.graphqlPath}
                `);
        })
    }catch(err){
        console.log(err)
    }
}
bootStrap();