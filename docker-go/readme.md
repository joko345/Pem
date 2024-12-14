go mod init github.com/joko345/golangmyskill
go mod tidy
docker build -t "docker-go" .
docker run -p 8080:8080 -it docker-go

FROM golang:alpine //versi golang dan provider gambar
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN go build -o main
CMD ["/app/main"]
//docker menjalankan perintah layaknya cmd ubuntu
docker build -t "nama folder project" .


install aws cli
sudo apt update
sudo apt install unzip curl -y
sudo yum update -y
sudo yum install unzip curl -y
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
aws configure


install docker machine
curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-$(uname -s)-$(uname -m) > /tmp/docker-machine
sudo mv /tmp/docker-machine /usr/local/bin/docker-machine
sudo chmod +x /usr/local/bin/docker-machine
docker-machine --version
sudo curl -L https://raw.githubusercontent.com/docker/machine/master/contrib/completion/bash/docker-machine.bash | sudo tee /etc/bash_completion.d/docker-machine > /dev/null
source /etc/bash_completion.d/docker-machine

membuat file pub dari file pem
ssh-keygen -y -f ~/docker-go/aws2x.pem > ~/docker-go/aws2x.pem.pub
atur izin file 
chmod 400 ~/downloads/docker-go/aws2x.pem
untuk poweshel=
docker-machine create -d amazonec2 `
  --amazonec2-region ap-southeast-1 `
  --amazonec2-instance-type t2.micro `
  --amazonec2-ssh-keypath "C:\Users\Joko Prasetyo Utomo\downloads\aws2x.pem" `
  --amazonec2-ssh-user ubuntu `
  aws-cli-stud

buat aws
docker-machine create -d amazonec2 \
--amazonec2-region ap-southeast-1 \
--amazonec2-instance-type t2.micro \
--amazonec2-ssh-keypath ~/docker-go/aws2x.pem \
--amazonec2-ssh-user ubuntu \
--engine-install-url https://get.docker.com/ \
aws-cli-go

pada aws, agar comannd yang berjalan sinkron dengan di aws=
& docker-machine env aws-cli-study211 | Invoke-Expression
docker-machine regenerate-certs aws-cli-study211


jika koneksi ec2 dengan docker buat pub file dulu dan konfigurasi file powershel aws.ps1
koneksi ec dengan docker agar bisa ubah file ec2 secara lokal tanpa konek ke remote explorer 