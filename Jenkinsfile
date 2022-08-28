pipeline{
    agent{
        label "node"
    }
    stages{
        stage("Down all Containers"){
            steps{
                sh 'docker compose down'
            }
        }
         stage("Prune Docker container"){
            steps{
                sh 'docker system prune -a -f'
            }
        }
        stage("Start Docker container"){
            steps{
                sh 'docker compose up -d'
                sh 'docker compose ps'
            }
        }
    }
}