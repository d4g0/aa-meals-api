const PORT = process.env.PORT || 3010;
import Express from 'express';
const app = Express();
import router from '~/server/router';
import { apiLimiter } from '~/server/middleware/index.js';
import helmet from 'helmet';


// general middlewares
app.use(apiLimiter,helmet());
app.use(Express.json());
// api routes
app.use('/api/', router);

export function spinUpServer() {
    app.listen(PORT, () => { console.log('app listening at port:' + PORT) })
}


