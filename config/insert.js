var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quizdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   var myobj = {
//    	"_id": 1,
//    	"quiz":{
//     "Name": "ADMINISTRATIVO"
//     },   
//     "questions": [{
//         "Id": 1,
//         "Name": "Qual a facilidade para realizar o login no e-SUSAB-PEC?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 2,
//         "Name": "As telas do sistema são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 3,
//         "Name": "Os campos a serem preenchidos são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 4,
//         "Name": "O uso do sistema agilizou o tempo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", "QuestionId": 1010
//         }, {
//             "Id": 7,
//             "Name": "Não agilizou", "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 5,
//         "Name": "O uso do sistema ajudou na organização do fluxo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 6,
//         "Name": "O sistema apresentou indisponibilidade com que frequência?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 10,
//             "Name": "Muito frequente", "QuestionId": 1010
//         }, {
//             "Id": 11,
//             "Name": "Moderadamente frequente", "QuestionId": 1010
//         }, {
//             "Id": 12,
//             "Name": "Pouco frequente", "QuestionId": 1010
//         }, {
//             "Id": 13,
//             "Name": "Não apresentou", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 7,
//         "Name": "Assinale abaixo as ocorrências identificadas durante a implantação:",
//         "QuestionTypeId": 2,
//         "componentType": "CHECKBOX",
//         "Options": [{
//             "Id": 14,
//             "Name": "Indisponibilidade do sistema", "QuestionId": 1010
//         }, {
//             "Id": 15,
//             "Name": "Indisponibilidade de internet", "QuestionId": 1010
//         }, {
//             "Id": 16,
//             "Name": "Lentidão (Gravar/Alterar/Consultar)", "QuestionId": 1010
//         }, {
//             "Id": 17,
//             "Name": "Falhas no sistema (Gravar/Alterar/Consultar)", "QuestionId": 1010
//         }, {
//             "Id": 18,
//             "Name": "Outros", "QuestionId": 1010
//         }],
//           "QuestionType": { "Id": 2, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 8,
//         "Name": "Qual o seu nível de satisfação do treinamento recebido?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 19,
//             "Name": "Muito satisfeito", "QuestionId": 1010
//         }, {
//             "Id": 20,
//             "Name": "Satisfeito", "QuestionId": 1010
//         }, {
//             "Id": 21,
//             "Name": "Não satisfeito", "QuestionId": 1010
//         }, {
//             "Id": 22,
//             "Name": "Não tive treinamento", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 9,
//         "Name": "Em relação ao sistema, você considera aderente ao seu processo de trabalho?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 23,
//             "Name": "Muito aderente", "QuestionId": 1010
//         }, {
//             "Id": 24,
//             "Name": "Aderente", "QuestionId": 1010
//         }, {
//             "Id": 25,
//             "Name": "Pouco aderente", "QuestionId": 1010
//         }, {
//             "Id": 26,
//             "Name": "Nada aderente", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 22,
//         "Name": "Qual a facilidade de cadastrar/atualizar os dados do cidadão no E-SUSAB-PEC?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 18,
//         "Name": "As funcionalidades, do modulo agenda, atendem às necessidades do processo de trabalho da unidade?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 23,
//         "Name": "Qual a facilidade para efetuar o agendamento do cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 24,
//         "Name": "Se você fez digitação das fichas CDS, qual a sua avaliação?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",            
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 25,
//         "Name": "Os relatórios atendem às necessidades de informação, sobre o cadastro das famílias?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",            
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", "QuestionId": 1010
//         }],
//          "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 15,
//         "componentType": "TEXTAREA",
//         "Name": "Compartilhe conosco suas experiências de uso do sistema e relate as recomendações que possam nos ajudar a aprimorá-lo.",
//         "QuestionTypeId": 3,
//         "Options": [{}],
//         "QuestionType": { "Id": 3, "Name": "text", "IsActive": true }
//     }]
            
// };
// {
// 	"_id": 2,
// 	"quiz":{
//     	"Name": "COORDENADOR"
//         },  
//         "questions": [{
//         "Id": 1,
//         "Name": "Qual a facilidade para realizar o login no e-SUSAB-PEC?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//     "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }

//     }, {
//         "Id": 2,
//         "Name": "As telas do sistema são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 3,
//         "Name": "Os campos a serem preenchidos são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 4,
//         "Name": "O uso do sistema agilizou o tempo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito",
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 7,
//             "Name": "Não agilizou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 5,
//         "Name": "O uso do sistema ajudou na organização do fluxo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 6,
//         "Name": "O sistema apresentou indisponibilidade com que frequência?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 10,
//             "Name": "Muito frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 11,
//             "Name": "Moderadamente frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 12,
//             "Name": "Pouco frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 13,
//             "Name": "Não apresentou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 7,
//         "Name": "Assinale abaixo as ocorrências identificadas durante a implantação:",
//         "QuestionTypeId": 2,
//         "componentType": "CHECKBOX",
//         "Options": [{
//             "Id": 14,
//             "Name": "Indisponibilidade do sistema", 
//             "QuestionId": 1010
//         }, {
//             "Id": 15,
//             "Name": "Indisponibilidade de internet", 
//             "QuestionId": 1010
//         }, {
//             "Id": 16,
//             "Name": "Lentidão (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 17,
//             "Name": "Falhas no sistema (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 18,
//             "Name": "Outros", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 2, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 8,
//         "Name": "Qual o seu nível de satisfação do treinamento recebido?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 19,
//             "Name": "Muito satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 20,
//             "Name": "Satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 21,
//             "Name": "Não satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 22,
//             "Name": "Não tive treinamento", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 9,
//         "Name": "Em relação ao sistema, você considera aderente ao seu processo de trabalho?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 23,
//             "Name": "Muito aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 24,
//             "Name": "Aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 25,
//             "Name": "Pouco aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 26,
//             "Name": "Nada aderente", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 17,
//         "Name": "Como é a operação de cadastrar e vincular os profissionais na unidade?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 18,
//         "Name": "As funcionalidades, do modulo agenda, atendem às necessidades do processo de trabalho da unidade?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 19,
//         "Name": "As permissões existentes, em cada perfil, atendem às necessidades?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//          "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 

//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 

//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 

//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 

//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 20,
//         "Name": "Os relatórios atendem às necessidades de informação, para gestão da unidade (Cadastro, Atendimento, Procedimento, Monitoramento, Conduta, Exames, Acompanhamento)?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
    

//         "Id": 21,
//         "Name": "Como foi a aceitação do sistema, por parte dos profissionais da unidade?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{            
//             "Id": 31,
//             "Name": "Muito boa", 
//             "QuestionId": 1010 
//         }, { 
//             "Id": 32,  
//             "Name": "Boa", 
//             "QuestionId": 1010 
//         }, {
//             "Id": 33,  
//             "Name": "Ruim", 
//             "QuestionId": 1010 
//         }, {
//             "Id": 34,  
//             "Name": "Muito ruim", 
//             "QuestionId": 1010 
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }

//     }, {
//         "Id": 15,
//         "componentType": "TEXTAREA",
//         "Name": "Compartilhe conosco suas experiências de uso do sistema e relate as recomendações que possam nos ajudar a aprimorá-lo.",
//         "QuestionTypeId": 3,
//         "Options": [{}],
//         "QuestionType": { "Id": 3, "Name": "text", "IsActive": true }
//     }]
          
            
// };

// {
//  "_id": 3,
// 	"quiz":{     
//     "Name": "MÉDICOS"
//    	},  
//     "questions": [{
//         "Id": 1,
//         "Name": "Qual a facilidade para realizar o login no e-SUSAB-PEC?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 2,
//         "Name": "As telas do sistema são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 3,
//         "Name": "Os campos a serem preenchidos são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 4,
//         "Name": "O uso do sistema agilizou o tempo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 7,
//             "Name": "Não agilizou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 5,
//         "Name": "O uso do sistema ajudou na organização do fluxo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,

//             "Name": "Pouco", "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 6,
//         "Name": "O sistema apresentou indisponibilidade com que frequência?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 10,
//             "Name": "Muito frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 11,
//             "Name": "Moderadamente frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 12,
//             "Name": "Pouco frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 13,
//             "Name": "Não apresentou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 7,
//         "Name": "Assinale abaixo as ocorrências identificadas durante a implantação:",
//         "QuestionTypeId": 2,
//         "componentType": "CHECKBOX",
//         "Options": [{
//             "Id": 14,
//             "Name": "Indisponibilidade do sistema", 
//             "QuestionId": 1010
//         }, {
//             "Id": 15,
//             "Name": "Indisponibilidade de internet", 
//             "QuestionId": 1010
//         }, {
//             "Id": 16,
//             "Name": "Lentidão (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 17,
//             "Name": "Falhas no sistema (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 18,
//             "Name": "Outros", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 2, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 8,
//         "Name": "Qual o seu nível de satisfação do treinamento recebido?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 19,
//             "Name": "Muito satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 20,
//             "Name": "Satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 21,
//             "Name": "Não satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 22,
//             "Name": "Não tive treinamento", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 9,
//         "Name": "Em relação ao sistema, você considera aderente ao seu processo de trabalho?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 23,
//             "Name": "Muito aderente",
//             "QuestionId": 1010
//         }, {
//             "Id": 24,
//             "Name": "Aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 25,
//             "Name": "Pouco aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 26,
//             "Name": "Nada aderente", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     },  {
//         "Id": 10,
//         "Name": "As informações contidas, na agenda dos profissionais, atendem ao esperado?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 11,
//         "Name": "Qual a facilidade de entendimento/preenchimento dos campos do SOAP?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 16,
//         "Name": "Qual foi o entendimento da tabela CIAP2, para o preenchimento dos campos?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",            
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 13,
//         "Name": "Os relatórios atendem às necessidades de informação, sobre a população atendida (Cadastro, Atendimento, Procedimento, Monitoramento, Conduta, Exames, Acompanhamento)?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 14,
//         "Name": "O quanto a utilização do sistema impactou na sua rotina?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 15,
//         "componentType": "TEXTAREA",
//         "Name": "Compartilhe conosco suas experiências de uso do sistema e relate as recomendações que possam nos ajudar a aprimorá-lo.",
//         "QuestionTypeId": 3,
//         "Options": [{}],
//         "QuestionType": { "Id": 3, "Name": "text", "IsActive": true }
//     }]
          
// };
// {
//     "_id": 4,
// 	   "quiz":{       	
//     	"Name": "ENFERMEIROS"
//         },  
//         "questions": [{
//         "Id": 1,
//         "Name": "Qual a facilidade para realizar o login no e-SUSAB-PEC?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 2,
//         "Name": "As telas do sistema são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 3,
//         "Name": "Os campos a serem preenchidos são de fácil entendimento?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 4,
//         "Name": "O uso do sistema agilizou o tempo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 7,
//             "Name": "Não agilizou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 5,
//         "Name": "O uso do sistema ajudou na organização do fluxo de atendimento ao cidadão?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,

//             "Name": "Pouco", "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 6,
//         "Name": "O sistema apresentou indisponibilidade com que frequência?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 10,
//             "Name": "Muito frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 11,
//             "Name": "Moderadamente frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 12,
//             "Name": "Pouco frequente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 13,
//             "Name": "Não apresentou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 7,
//         "Name": "Assinale abaixo as ocorrências identificadas durante a implantação:",
//         "QuestionTypeId": 2,
//         "componentType": "CHECKBOX",
//         "Options": [{
//             "Id": 14,
//             "Name": "Indisponibilidade do sistema", 
//             "QuestionId": 1010
//         }, {
//             "Id": 15,
//             "Name": "Indisponibilidade de internet", 
//             "QuestionId": 1010
//         }, {
//             "Id": 16,
//             "Name": "Lentidão (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 17,
//             "Name": "Falhas no sistema (Gravar/Alterar/Consultar)", 
//             "QuestionId": 1010
//         }, {
//             "Id": 18,
//             "Name": "Outros", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 2, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 8,
//         "Name": "Qual o seu nível de satisfação do treinamento recebido?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 19,
//             "Name": "Muito satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 20,
//             "Name": "Satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 21,
//             "Name": "Não satisfeito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 22,
//             "Name": "Não tive treinamento", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 9,
//         "Name": "Em relação ao sistema, você considera aderente ao seu processo de trabalho?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 23,
//             "Name": "Muito aderente",
//             "QuestionId": 1010
//         }, {
//             "Id": 24,
//             "Name": "Aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 25,
//             "Name": "Pouco aderente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 26,
//             "Name": "Nada aderente", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     },  {
//         "Id": 10,
//         "Name": "As informações contidas, na agenda dos profissionais, atendem ao esperado?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 11,
//         "Name": "Qual a facilidade de entendimento/preenchimento dos campos do SOAP?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 16,
//         "Name": "Qual foi o entendimento da tabela CIAP2, para o preenchimento dos campos?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",            
//         "Options": [{
//             "Id": 1,
//             "Name": "Muito fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 2,
//             "Name": "Fácil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 3,
//             "Name": "Difícil", 
//             "QuestionId": 1010
//         }, {
//             "Id": 4,
//             "Name": "Muito difícil", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 13,
//         "Name": "Os relatórios atendem às necessidades de informação, sobre a população atendida (Cadastro, Atendimento, Procedimento, Monitoramento, Conduta, Exames, Acompanhamento)?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 27,
//             "Name": "Totalmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 28,
//             "Name": "Parcialmente", 
//             "QuestionId": 1010
//         }, {
//             "Id": 29,
//             "Name": "Não atendem", 
//             "QuestionId": 1010
//         }, {
//             "Id": 30,
//             "Name": "Não utilizo", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 14,
//         "Name": "O quanto a utilização do sistema impactou na sua rotina?",
//         "QuestionTypeId": 1,
//         "componentType": "RADIO",
//         "Options": [{
//             "Id": 5,
//             "Name": "Muito", 
//             "QuestionId": 1010
//         }, {
//             "Id": 6,
//             "Name": "Pouco", 
//             "QuestionId": 1010
//         }, {
//             "Id": 8,
//             "Name": "Dificultou", 
//             "QuestionId": 1010
//         }, {
//             "Id": 9,
//             "Name": "Não ajudou", 
//             "QuestionId": 1010
//         }],
//         "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
//     }, {
//         "Id": 15,
//         "componentType": "TEXTAREA",
//         "Name": "Compartilhe conosco suas experiências de uso do sistema e relate as recomendações que possam nos ajudar a aprimorá-lo.",
//         "QuestionTypeId": 3,
//         "Options": [{}],
//         "QuestionType": { "Id": 3, "Name": "text", "IsActive": true }
//     }]
          
// };
// {
    "_id": 5,
	   "quiz":{     
    "Name": "ODONTOLOGIA"
    },  
    "questions": [{
        "Id": 1,
        "Name": "Qual a facilidade para realizar o login no e-SUSAB-PEC?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 1,
            "Name": "Muito fácil", 
            "QuestionId": 1010
        }, {
            "Id": 2,
            "Name": "Fácil", 
            "QuestionId": 1010
        }, {
            "Id": 3,
            "Name": "Difícil", 
            "QuestionId": 1010
        }, {
            "Id": 4,
            "Name": "Muito difícil", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 2,
        "Name": "As telas do sistema são de fácil entendimento?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 1,
            "Name": "Muito fácil", 
            "QuestionId": 1010
        }, {
            "Id": 2,
            "Name": "Fácil", 
            "QuestionId": 1010
        }, {
            "Id": 3,
            "Name": "Difícil", 
            "QuestionId": 1010
        }, {
            "Id": 4,
            "Name": "Muito difícil", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 3,
        "Name": "Os campos a serem preenchidos são de fácil entendimento?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 1,
            "Name": "Muito fácil", 
            "QuestionId": 1010
        }, {
            "Id": 2,
            "Name": "Fácil", 
            "QuestionId": 1010
        }, {
            "Id": 3,
            "Name": "Difícil", 
            "QuestionId": 1010
        }, {
            "Id": 4,
            "Name": "Muito difícil", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 4,
        "Name": "O uso do sistema agilizou o tempo de atendimento ao cidadão?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 5,
            "Name": "Muito", 
            "QuestionId": 1010
        }, {
            "Id": 6,
            "Name": "Pouco", 
            "QuestionId": 1010
        }, {
            "Id": 7,
            "Name": "Não agilizou", 
            "QuestionId": 1010
        }, {
            "Id": 8,
            "Name": "Dificultou", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 5,
        "Name": "O uso do sistema ajudou na organização do fluxo de atendimento ao cidadão?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 5,
            "Name": "Muito", 
            "QuestionId": 1010
        }, {
            "Id": 6,
            "Name": "Pouco", 
            "QuestionId": 1010
        }, {
            "Id": 8,
            "Name": "Dificultou", 
            "QuestionId": 1010
        }, {
            "Id": 9,
            "Name": "Não ajudou", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 6,
        "Name": "O sistema apresentou indisponibilidade com que frequência?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 10,
            "Name": "Muito frequente", 
            "QuestionId": 1010
        }, {
            "Id": 11,
            "Name": "Moderadamente frequente", 
            "QuestionId": 1010
        }, {
            "Id": 12,
            "Name": "Pouco frequente", 
            "QuestionId": 1010
        }, {
            "Id": 13,
            "Name": "Não apresentou", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 7,
        "Name": "Assinale abaixo as ocorrências identificadas durante a implantação:",
        "QuestionTypeId": 2,
        "componentType": "CHECKBOX",
        "Options": [{
            "Id": 14,
            "Name": "Indisponibilidade do sistema", 
            "QuestionId": 1010
        }, {
            "Id": 15,
            "Name": "Indisponibilidade de internet", 
            "QuestionId": 1010
        }, {
            "Id": 16,
            "Name": "Lentidão (Gravar/Alterar/Consultar)", 
            "QuestionId": 1010
        }, {
            "Id": 17,
            "Name": "Falhas no sistema (Gravar/Alterar/Consultar)", 
            "QuestionId": 1010
        }, {
            "Id": 18,
            "Name": "Outros", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 2, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 8,
        "Name": "Qual o seu nível de satisfação do treinamento recebido?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 19,
            "Name": "Muito satisfeito", 
            "QuestionId": 1010
        }, {
            "Id": 20,
            "Name": "Satisfeito", 
            "QuestionId": 1010
        }, {
            "Id": 21,
            "Name": "Não satisfeito", 
            "QuestionId": 1010
        }, {
            "Id": 22,
            "Name": "Não tive treinamento", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 9,
        "Name": "Em relação ao sistema, você considera aderente ao seu processo de trabalho?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 23,
            "Name": "Muito aderente", 
            "QuestionId": 1010
        }, {
            "Id": 24,
            "Name": "Aderente", 
            "QuestionId": 1010
        }, {
            "Id": 25,
            "Name": "Pouco aderente", 
            "QuestionId": 1010
        }, {
            "Id": 26,
            "Name": "Nada aderente", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 10,
        "Name": "As informações contidas, na agenda dos profissionais, atendem ao esperado?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 27,
            "Name": "Totalmente", 
            "QuestionId": 1010
        }, {
            "Id": 28,
            "Name": "Parcialmente", 
            "QuestionId": 1010
        }, {
            "Id": 29,
            "Name": "Não atendem", 
            "QuestionId": 1010
        }, {
            "Id": 30,
            "Name": "Não utilizo", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 11,
        "Name": "Qual a facilidade de entendimento/preenchimento dos campos do SOAP?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 1,
            "Name": "Muito fácil", 
            "QuestionId": 1010
        }, {
            "Id": 2,
            "Name": "Fácil", 
            "QuestionId": 1010
        }, {
            "Id": 3,
            "Name": "Difícil", 
            "QuestionId": 1010
        }, {
            "Id": 4,
            "Name": "Muito difícil", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    },{
        "Id": 12,
        "Name": "Qual foi o entendimento/preenchimento do odontograma?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 1,
            "Name": "Muito fácil", 
            "QuestionId": 1010
        }, {
            "Id": 2,
            "Name": "Fácil", 
            "QuestionId": 1010
        }, {
            "Id": 3,
            "Name": "Difícil", 
            "QuestionId": 1010
        }, {
            "Id": 4,
            "Name": "Muito difícil", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 13,
        "Name": "Os relatórios atendem às necessidades de informação, sobre a população atendida (Cadastro, Atendimento, Procedimento, Monitoramento, Conduta, Exames, Acompanhamento)?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 27,
            "Name": "Totalmente", 
            "QuestionId": 1010
        }, {
            "Id": 28,
            "Name": "Parcialmente",
            "QuestionId": 1010
        }, {
            "Id": 29,
            "Name": "Não atendem", 
            "QuestionId": 1010
        }, {
            "Id": 30,
            "Name": "Não utilizo", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 14,
        "Name": "O quanto a utilização do sistema impactou na sua rotina?",
        "QuestionTypeId": 1,
        "componentType": "RADIO",
        "Options": [{
            "Id": 5,
            "Name": "Muito", 
            "QuestionId": 1010
        }, {
            "Id": 6,
            "Name": "Pouco", 
            "QuestionId": 1010
        }, {
            "Id": 8,
            "Name": "Dificultou", 
            "QuestionId": 1010
        }, {
            "Id": 9,
            "Name": "Não ajudou", 
            "QuestionId": 1010
        }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }        
    }, {
        "Id": 15,
        "componentType": "TEXTAREA",
        "Name": "Compartilhe conosco suas experiências de uso do sistema e relate as recomendações que possam nos ajudar a aprimorá-lo.",
        "QuestionTypeId": 3,
        "Options": [{}],
        "QuestionType": { "Id": 3, "Name": "text", "IsActive": true }
    }]
      
               
};

  db.collection("quizzes").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});