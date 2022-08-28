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
        //  stage("Down Docker container"){
        //      steps {
        //         sh "sudo docker-compose down"
        //      }
        // }
         stage("Prune Docker container"){
            steps{
                sh 'sudo docker system prune -a -f'
            }
        }
        stage("Start Docker container"){
            steps{
                sh 'sudo docker-compose up -d'
                sh 'sudo docker-compose ps'
            }
        }
    }
    //  post {
    //   always {
    //       sh "sudo docker-compose down"
    //   }
    //  }
}