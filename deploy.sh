echo "Swiching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@173.255.250.251:/var/www/173.255.250.251/

echo "Done!"