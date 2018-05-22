### Admin
To access the admin section locally, you have to include a trailing slash, otherwise you will get an error that the 
config file cannot be loaded.
http://localhost:8000/admin/

### Netlify Identity
When following the instructions here (https://www.netlifycms.org/docs/add-to-your-site/#authentication) when you get to 
the **Add the Netlify Identity Widget** step, you will need to add the redirect script to the `static/admin/index.html` 
file.
