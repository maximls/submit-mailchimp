After making changes to JS files in 'src' directory in project console run:    
```
'yarn netlify-lambda build src'    
```
this will compile functions. After that run:    
```
'netlify-deploy --prod'    
```
this will push all changes to the server.    
To make changes to html files simply edit them in 'build' directory and run 'netlify-deploy' again.