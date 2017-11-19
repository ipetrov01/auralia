this.httpClient.configure(config => {
                config
                    .withBaseUrl(this.BASE_URL)
                    .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                    })
                    .withInterceptor({
                    request(request) {
                        var authHeader = 'Bearer ' + localStorage.getItem('aurelia_token')
                        request.headers.append('Authorization', authHeader);
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                    });
                });
    