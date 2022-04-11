import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/1ndiigo/indigo.github.io.git', // Update to point to your repository
        user: {
            name: 'Indigo', // update to use your name
            email: 'aidenhperry@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);