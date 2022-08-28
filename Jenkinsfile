pipeline{
    agent any
    stages{
        stage("verify tooling"){
             steps {
        sh '''
          docker --version
          docker-compose --version 
        '''
      }
        }
         stage("Prune Docker container"){
            steps{
                sh 'docker system prune -a -f'
            }
        }
        stage("Start Docker container"){
            steps{
                sh 'docker-compose up -d'
                sh 'docker-compose ps'
            }
        }
    }
     post {
      always {
          sh "docker-compose down"
      }
     }
}