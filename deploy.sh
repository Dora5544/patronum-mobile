git pull

echo "code pulled"

cp -rf ./build /usr/local/nginx/html/patronum

echo "html files copied."

/usr/local/nginx/sbin/nginx -s reload
echo "nginx server reloaded."
