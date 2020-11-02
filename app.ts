import * as express from 'express';
import * as config from 'config';
import * as mongoose from 'mongoose';
import * as path from 'path';
import { authRoutes } from './roters/auth';
import { adminRoutes } from './roters/admin';
import { userRoutes } from './roters/user';

const app = express();
const PORT = process.env.PORT || config.get('port');

app.use(express.json());
app.use("/images", express.static(path.join("server/images")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    next();
});

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

async function mongoConnect() {
    try {
        await mongoose.connect(config.get('mongodbUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(
            PORT,
            () => console.log(`Server start on port ${PORT}`)
        );
    } catch(e) {
        console.log('Mongo connect has Error', e.message);
        process.exit(1);
    }
}

mongoConnect();
