import mongoose from 'mongoose';

const connectionDb = (url) => {
    console.log('url: ' + url);
    mongoose.connect(url, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) throw err;
        console.log('db connection created')
    })
}

export default connectionDb