# Common Commands for Angular

1. start the server
```shell
$ ng server -o
```

2. generate component
- skip generate test files : --skip-tests
- inline style(not reference external style) : `-s`
```shell
# c - means component
$ ng g c folder_path/component_name -s --skip-tests
```

3. generate service
```shell
# s - means service
$ ng g s folder_path/service_name --skip-tests
```

4. generate class (using class generator to generate model file)
```shell
# cl - means class
$ ng g cl folder_path/model_name --type=model --skip-tests
```

# Configure
- Using `ngx-toastr` as a popup UI component.
- add "node_modules/ngx-toastr/toastr.css" to styles section within `angular.json` file.
- use in global scale, so go to `app.module.ts` and import relevant modules.
```typescript
imports: [
    ...,
    BrowserAnimationsModule, // required animations module for ngx-toastr
    ToastrModule.forRoot(), // ToastrModule for ngx-toastr
]
```

# Knowledge
- Angular using `rxjs`(functional programming library) as a default pkg to handle the API calling logic.