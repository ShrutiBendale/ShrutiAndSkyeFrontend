# ShrutiAndSkyeFrontend

This repo contains the frontend code for the landing page for www.shrutiandskye.com. The landing page is a NPM based React app.

I have set up a CI/CD pipeline set up that builds this React app and deploys the assets to a AWS S3 bucket that hosts the static assets. The assets are distributed via the AWS CloudFront CDN.

#### Local testing:

run `npm start` to test the code locally in your browser

#### Notes:

Any Commit to the main branch will automatically trigger the CI/CD pipeline and deploy the code to the s3 bucket that hosts the website.
