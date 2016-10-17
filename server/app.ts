import * as express from "express"; 
import { join } from "path";

const app: express.Application = express();
app.disable("x-powered-by");


app.use(express.static(join(__dirname, '../public')));

app.get("/api/things",function (req, res) {
  res.send({"server":"data from server!"});
});

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});


// no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }