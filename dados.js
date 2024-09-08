let dados = [
    {
          'titulo' : "Dom Casmurro",
          'descricao' : 'Imagine um homem atormentado por uma única pergunta: será que fui traído pela mulher que amo? Em um jogo de memórias, acusações e incertezas, Dom Casmurro nos convida a uma jornada introspectiva e tortuosa pela mente de um homem consumido pela dúvida',
          'link' : 'https://www.amazon.com.br/Dom-Casmurro-Machado-Assis/dp/859431860X'

    },
    {
        'titulo' : '1984',
        'descricao' : 'Em um mundo distópico controlado por um Grande Irmão, a privacidade é um luxo e a liberdade, um sonho distante. Acompanhe a história de Winston Smith, um homem comum que desafia o sistema e busca a verdade em um mundo de mentiras e manipulação',
        'link' : 'https://www.amazon.com.br/1984-George-Orwell/dp/8535914846'
    },
    {
        "titulo": "Memórias Póstumas de Brás Cubas",
        "descricao": "Narrado por um defunto, Brás Cubas reflete sobre sua vida, sua falta de realizações e a superficialidade de suas relações.",
        "link": "https://www.amazon.com.br/Mem%C3%B3rias-P%C3%B3stumas-Br%C3%A1s-Cubas-Exclusiva/dp/658021001X"
      },
      {
        "titulo": "O Guarani",
        "descricao": "Uma narrativa romântica ambientada no Brasil colonial, contando a história do índio Peri e seu amor por Cecília.",
        "link": "https://www.amazon.com.br/Guarani-Jos%C3%A9-Alencar/dp/8594318847"
      },
      {
        "titulo": "Iracema",
        "descricao": "Romance indianista que narra a trágica história de amor entre o colonizador Martim e a indígena Iracema.",
        "link": "https://www.amazon.com.br/Iracema-Jos%C3%A9-Alencar/dp/8578885252"
      },
      {
        "titulo": "O Cortiço",
        "descricao": "Romance que retrata a vida em um cortiço no Rio de Janeiro, com temas como a desigualdade social, o preconceito e a exploração.",
        "link": "https://www.amazon.com.br/corti%C3%A7o-Alu%C3%ADsio-Azevedo/dp/8578886437"
      },
      {
        "titulo": "Grande Sertão: Veredas",
        "descricao": "Narrado pelo jagunço Riobaldo, o livro explora a vida no sertão brasileiro, questões filosóficas e existenciais.",
        "link": "https://www.amazon.com.br/Grande-sert%C3%A3o-Veredas-Guimar%C3%A3es-Rosa/dp/8535931988"
      },
      {
        "titulo": "Capitães da Areia",
        "descricao": "A história de um grupo de meninos de rua em Salvador e suas lutas para sobreviver.",
        "link": "https://www.amazon.com.br/Capit%C3%A3es-areia-Jorge-Amado/dp/8535914064"
      },
      {
        "titulo": "Vidas Secas",
        "descricao": "O romance narra a história de uma família de retirantes que enfrenta a miséria e a seca no sertão nordestino.",
        "link": "https://www.amazon.com.br/Vidas-secas-Graciliano-Ramos/dp/8501114782"
      },
      {
        "titulo": "A Moreninha",
        "descricao": "Considerado o primeiro romance romântico brasileiro, conta a história de amor entre Augusto e Carolina.",
        "link": "https://www.amazon.com.br/Moreninha-Joaquim-Manuel-Macedo/dp/8508043104"
      },
      {
        "titulo": "Macunaíma",
        "descricao": "Um dos maiores clássicos do modernismo brasileiro, o livro narra as aventuras do anti-herói Macunaíma, símbolo da identidade nacional.",
        "link": "https://www.amazon.com.br/Macuna%C3%ADma-Mario-Andrade/dp/8520933610"
      },
      {
        "titulo": "Sagarana",
        "descricao": "Uma coletânea de contos que retratam o cotidiano e a cultura do sertão brasileiro.",
        "link": "https://amazon.com.br/Sagarana-Jo%C3%A3o-Guimar%C3%A3es-Rosa/dp/8526024647"
      },
      {
        "titulo": "O Tempo e o Vento",
        "descricao": "Uma saga familiar que retrata a formação do Rio Grande do Sul e a história do Brasil.",
        "autor": "Erico Verissimo"
      },
      {
        "titulo": "Os Sertões",
        "descricao": "Mistura de relato histórico e romance, descreve a Guerra de Canudos e a vida no sertão nordestino.",
        "autor": "Euclides da Cunha"
      },
      {
        "titulo": "A Hora da Estrela",
        "descricao": "Conta a história de Macabéa, uma nordestina que vive uma vida de privações e ignorância no Rio de Janeiro.",
        "autor": "Clarice Lispector"
      },
      {
        "titulo": "O Primo Basílio",
        "descricao": "Romance que critica a sociedade burguesa do século XIX, narrando a história de um triângulo amoroso.",
        "autor": "Eça de Queirós"
      },
      {
        "titulo": "Quincas Borba",
        "descricao": "Acompanha a trajetória de Rubião, que herda a fortuna do filósofo Quincas Borba e acaba sucumbindo à loucura.",
        "autor": "Machado de Assis"
      },
      {
        "titulo": "A Escrava Isaura",
        "descricao": "Romance abolicionista que narra a vida de Isaura, uma escrava branca que luta por sua liberdade.",
        "link": "https://www.amazon.com.br/escrava-Isaura-Bernardo-Guimar%C3%A3es/dp/6555522240"
      },
      {
        "titulo": "Lucíola",
        "descricao": "A história de uma cortesã chamada Lúcia e seu amor por Paulo, retratando as convenções morais da época.",
        "link": "https://www.amazon.com.br/Luc%C3%ADola-Jos%C3%A9-Alencar/dp/8572325298"
      },
      {
        "titulo": "Senhora",
        "descricao": "Romance de crítica social, com foco na trajetória de Aurélia, uma mulher que, após enriquecer, compra seu próprio casamento.",
        "link": "https://www.amazon.com.br/Senhora-Jos%C3%A9-Alencar/dp/856356059X"
      },
      {
        "titulo": "O Mulato",
        "descricao": "Romance naturalista que denuncia o preconceito racial no Brasil, narrando a história de Raimundo, um mulato que enfrenta a discriminação da sociedade.",
        "link": "https://www.amazon.com.br/mulato-Alu%C3%ADsio-Azevedo/dp/6555520485"
      }
];