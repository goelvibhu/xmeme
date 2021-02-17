# Xmeme
Its a web application for meme loving people for sharing memes and find intresting memes

## Description
```bash
Firstly it contains a form asking for name,caption,url of image for meme. After filling these and submitting form one get a unique id for his meme.
One can find his meme by id using findbyid form.
Also there is a Getmemes button which will show latest 100 memes posted on website.
```

## Installation (local)
```bash
Setup Mongodb on your machine (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
npm install
npm run start
```
## Installation (Aws Ec2 Instance)
```bash
Clone repositry to your instance
chmod +x install.sh
sudo ./install.sh
chmod +x server_run.sh
./server_run.sh &
chmod +x sleep.sh
./sleep.sh
```