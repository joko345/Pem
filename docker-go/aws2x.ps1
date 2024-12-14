# Parameter untuk EC2 Instance
$instanceIP = "46.137.231.32"  # Ganti dengan IP publik EC2 Anda
$keyPath = "C:\Users\Joko Prasetyo Utomo\downloads\aws2x.pem" # Ganti dengan lokasi private key (file .pem) Anda
$containerName = "docker-go" # Nama Docker container
$imageName = "golang:alpine"              # Nama Docker image

# Perintah untuk menjalankan Docker di EC2
$dockerRunCommand = "docker run -d --restart unless-stopped --name $containerName $imageName"

# Perintah untuk mengecek container
$dockerStatusCommand = "docker ps"

# SSH ke EC2 dan jalankan Docker container
Write-Host "Menjalankan Docker container di EC2..."
ssh -i "C:\Users\Joko Prasetyo Utomo\downloads\aws2x.pem" ubuntu@ec2-46-137-231-32.ap-southeast-1.compute.amazonaws.com $dockerRunCommand

# Verifikasi bahwa container berjalan
Write-Host "Memverifikasi status Docker container..."
ssh -i "C:\Users\Joko Prasetyo Utomo\downloads\aws2x.pem" ubuntu@$46.137.231.32 $dockerStatusCommand
