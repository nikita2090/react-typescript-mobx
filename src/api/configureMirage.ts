import { Response, createServer } from 'miragejs';

const configureMirage = () =>
    createServer({
        routes() {
            this.namespace = 'api';

            this.get('/400', () => {
                const headers = {
                    'Content-Type': 'application/json',
                };
                const data = {
                    status: 400,
                    text: 'Bad request',
                    subStatus: 'Try later',
                };
                return new Response(400, headers, data);
            });
        },
    });

export default configureMirage;
