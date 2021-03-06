import * as express from 'express';
import * as cf_app from './app/vcap_application';
import * as cf_svc from './app/vcap_services';

var app = express()

app.set('views', __dirname + '/../views')
app.set('view engine', 'pug')
app.use(express.static( __dirname + '/../public'))

app.get( '/', function (_, res) {
  res.render( 'pages/index', {
    app_environment:    app.settings.env,
    application_name:   cf_app.get_app_name(),
    app_uris:           cf_app.get_app_uris(),
    app_space_name:     cf_app.get_app_space(),
    app_index:          cf_app.get_app_index(),
    app_mem_limits:     cf_app.get_app_mem_limits(),
    app_disk_limits:    cf_app.get_app_disk_limits(),
    service_label:      cf_svc.get_service_label(),
    service_name:       cf_svc.get_service_name(),
    service_plan:       cf_svc.get_service_plan()
  })
})

app.listen(process.env.PORT || 4000)
