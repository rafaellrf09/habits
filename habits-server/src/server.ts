import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify({
    logger: true
})

app.register(cors, {
    origin: true
});
app.register(appRoutes);

app.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.info(`Server listening on ${address}`);
});