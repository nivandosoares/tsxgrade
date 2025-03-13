"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

// Dados dos semestres
const semesters = [
  {
    id: "1",
    name: "1º Semestre",
    description: "Fundamentos",
    average: "9.71",
    courses: [
      { name: "Arquitetura e Organização de Computadores", grade: "10.0" },
      { name: "Interface e Usabilidade", grade: "10.0" },
      { name: "Projeto de Software", grade: "9.94" },
      { name: "Redes de Computadores", grade: "10.0" },
      { name: "Segurança e Auditoria de Sistemas", grade: "8.29" },
      { name: "Sociedade Brasileira e Cidadania", grade: "10.0" },
    ],
    projects: [
      {
        title: "Projeto de Software",
        description: "Elaboração de um aplicativo com Product Backlog e quadro Kanban.",
        pdfLink: "/portfolios/semestre1/PROJETO_DE_SOFTWARE.pdf",
        githubLink: null,
      },
    ],
  },
  {
    id: "2",
    name: "2º Semestre",
    description: "Fundamentos de Programação",
    average: "9.66",
    courses: [
      { name: "Algoritmos e Programação Estruturada", grade: "10.0" },
      { name: "Análise e Modelagem de Sistemas", grade: "9.91" },
      { name: "Engenharia de Software", grade: "8.84" },
      { name: "Linguagem de Programação", grade: "10.0" },
      { name: "Lógica e Matemática Computacional", grade: "9.56" },
      { name: "Projeto de Extensão I", grade: "10.0" },
    ],
    projects: [
      {
        title: "Análise e Modelagem de Sistemas",
        description: "Construção de um Diagrama de Casos de Uso para um sistema bancário.",
        pdfLink: "/portfolios/semestre2/MODELAGEM_DE_SISTEMAS.pdf",
        githubLink: null,
      },
      {
        title: "Algoritmos e Programação Estruturada",
        description: "Desenvolvimento de algoritmos para verificação de idade e potenciação.",
        pdfLink: "/portfolios/semestre2/ALGORITMOS.pdf",
        githubLink: "https://gist.github.com/nivandosoares/e03e390e1ee65af628aa1cd4e1208d5d",
      },
      {
        title: "Linguagem de Programação",
        description: "Programa para calcular o Índice de Massa Corporal (IMC) em Python.",
        pdfLink: "/portfolios/semestre2/LINGUAGEM.pdf",
        githubLink: "https://gist.github.com/nivandosoares/12241e17598081a9bf803872a5b8e664",
      },
      {
        title: "Lógica e Matemática Computacional",
        description: "Diagrama de blocos para cálculo da situação de estudantes com base na média.",
        pdfLink: "/portfolios/semestre2/LOGICA.pdf",
        githubLink: null,
      },
      {
        title: "Projeto de Extensão I",
        description: "Projeto de extensão universitária com foco em desenvolvimento de soluções para a comunidade.",
        pdfLink: "/portfolios/extensao/ext1.pdf",
        githubLink: null,
      },
    ],
  },
  {
    id: "3",
    name: "3º Semestre",
    description: "Programação Orientada a Objetos",
    average: "9.52",
    courses: [
      { name: "Análise Orientada a Objetos", grade: "8.61" },
      { name: "Linguagem Orientada a Objetos", grade: "10.0" },
      { name: "Modelagem de Dados", grade: "10.0" },
      { name: "Projeto de Extensão I", grade: "10.0" },
      { name: "Qualidade e Automação de Testes", grade: "8.51" },
      { name: "Sistemas Operacionais", grade: "10.0" },
    ],
    projects: [
      {
        title: "Análise Orientada a Objetos",
        description: "Desenvolvimento de um sistema de locação de veículos.",
        pdfLink: "/portfolios/semestre3/ANALISEOBJ.pdf",
        githubLink: null,
      },
      {
        title: "Linguagem Orientada a Objetos",
        description: "Aplicação de gerenciamento bancário em Java.",
        pdfLink: "/portfolios/semestre3/LINGUAGEMOBJ.pdf",
        githubLink: "https://gist.github.com/nivandosoares/1b2ef0c7246469c0824ea8626f7e252b",
        featured: true,
      },
      {
        title: "Modelagem de Dados",
        description: "Modelagem de banco de dados para sistema de empréstimos de livros.",
        pdfLink: "/portfolios/semestre3/MODELAGEM.pdf",
        githubLink: "https://gist.github.com/nivandosoares/5cbe128de77c4ec821ca351798e95ad9",
        featured: true,
      },
      {
        title: "Sistemas Operacionais",
        description: "Exploração dos comandos básicos do terminal Linux.",
        pdfLink: "/portfolios/semestre3/OPERACIONAIS.pdf",
        githubLink: "https://gist.github.com/nivandosoares/1a14b145ed3b60f5400cb6607f3098b0",
        featured: true,
      },
    ],
  },
  {
    id: "4",
    name: "4º Semestre",
    description: "Tópicos Avançados",
    average: "9.80",
    courses: [
      { name: "Computação em Nuvem", grade: "10.0" },
      { name: "Governança de Tecnologia", grade: "9.01" },
      { name: "Green IT", grade: "10.0" },
      { name: "Programação e Desenvolvimento de Banco de Dados", grade: "10.0" },
      { name: "Programação Web", grade: "10.0" },
    ],
    projects: [
      {
        title: "Programação e Desenvolvimento de Banco de Dados",
        description: "Sistema de gerenciamento de banco de dados para uma loja online.",
        pdfLink: "/portfolios/semestre4/DADOS.pdf",
        githubLink: "https://gist.github.com/nivandosoares/eff0de122ed0d89caccd3e74c091e4ef",
        featured: true,
      },
      {
        title: "Computação em Nuvem",
        description: "Configuração e execução de exemplo básico utilizando o CloudSim no NetBeans.",
        pdfLink: "/portfolios/semestre4/NUVEM.pdf",
        githubLink: null,
      },
      {
        title: "Programação Web",
        description: "Desenvolvimento de um site para descoberta de signo através da data de nascimento.",
        pdfLink: "/portfolios/semestre4/WEB.pdf",
        githubLink: "https://github.com/nivandosoares/descubra_seu_signo",
        livePreview: "https://8000-cs-1050912283472-default.cs-us-east1-yeah.cloudshell.dev",
        featured: true,
      },
    ],
  },
  {
    id: "5",
    name: "5º Semestre",
    description: "Especialização",
    average: "6.72",
    courses: [
      { name: "Desenvolvimento em JavaScript", grade: "Cursando" },
      { name: "Desenvolvimento Mobile", grade: "Cursando" },
      { name: "Desenvolvimento Responsivo", grade: "9.34" },
      { name: "Frameworks para Desenvolvimento de Software", grade: "Cursando" },
      { name: "Projeto de Extensão II", grade: "10.0" },
      { name: "Sistemas Distribuídos", grade: "Cursando" },
    ],
    projects: [
      {
        title: "Sistemas Distribuídos",
        description: "Este relatório apresenta atividades práticas em Sistemas Distribuídos, abordando sincronização de relógios (NTP), virtualização (VirtualBox), containerização (Docker) e análise de protocolos (Wireshark), aplicando conceitos teóricos discutidos em aula.",
        pdfLink: "/portfolios/semestre5/SISTEMASDIST.pdf",
        githubLink: "https://gist.github.com/nivandosoares/2452ad79607e6e4c8f2b1dc4750ce04c",
        featured: true,
      },
      {
        title: "Desenvolvimento em Javascript",
        description: "Aplicação web interativa desenvolvida com JavaScript moderno e frameworks atuais.",
        pdfLink: "/portfolios/semestre5/JAVASCRIPT.pdf",
        githubLink: "https://codepen.io/nivandosoares/pen/zxYqJxX",
        featured: true,
      },
      {
        title: "Desenvolvimento Mobile",
        description: "Aplicativo móvel desenvolvido com React Native para gerenciamento de tarefas pessoais.",
        pdfLink: "/portfolios/semestre5/MOBILE.pdf",
        githubLink: "https://github.com/nivandosoares/cinema",
        featured: true,
      },
      {
        title: "Projeto de Extensão II",
        description: "Continuação do projeto de extensão com implementação de novas funcionalidades e melhorias.",
        pdfLink: "/portfolios/semestre5/EXTENSAO2.pdf",
        githubLink: null,
      },
    ],
  },
]

export function SemesterDetails() {
  const [activeTab, setActiveTab] = useState("1")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes por Semestre</CardTitle>
        <CardDescription>Progresso semestre a semestre</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 mb-4">
            {semesters.map((semester) => (
              <TabsTrigger key={semester.id} value={semester.id}>
                {semester.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {semesters.map((semester) => (
            <TabsContent key={semester.id} value={semester.id} className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {semester.name} - {semester.description}
                  </h2>
                  <p className="text-muted-foreground">
                    Média do Semestre: <span className="font-bold text-primary">{semester.average}/10.0</span>
                  </p>
                </div>

                <Badge
                  className={`text-lg px-3 py-1 ${
                    Number.parseFloat(semester.average) >= 9
                      ? "bg-green-500 hover:bg-green-600"
                      : Number.parseFloat(semester.average) >= 8
                        ? "bg-blue-500 hover:bg-blue-600"
                        : Number.parseFloat(semester.average) >= 7
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {semester.average}
                </Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Disciplinas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {semester.courses.map((course, index) => (
                        <div key={index} className="flex justify-between items-center p-2 border-b last:border-0">
                          <span className="font-medium">{course.name}</span>
                          <Badge
                            variant={
                              course.grade === "Cursando"
                                ? "outline"
                                : Number.parseFloat(course.grade) >= 9
                                  ? "default"
                                  : Number.parseFloat(course.grade) >= 8
                                    ? "secondary"
                                    : "destructive"
                            }
                          >
                            {course.grade}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Projetos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {semester.projects.map((project, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg p-3 ${project.githubLink ? "border-l-4 border-primary" : ""} ${
                            project.featured ? "bg-muted/30" : ""
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold">{project.title}</h3>
                            {project.githubLink && (
                              <Badge variant="outline" className="ml-2">
                                <Github className="h-3 w-3 mr-1" /> GitHub
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.pdfLink && (
                              <Link href={project.pdfLink} target="_blank">
                                <Button variant="outline" size="sm">
                                  <FileText className="mr-2 h-3 w-3" />
                                  Relatório PDF
                                </Button>
                              </Link>
                            )}
                            {project.githubLink && (
                              <Link href={project.githubLink} target="_blank">
                                <Button variant="default" size="sm">
                                  <Github className="mr-2 h-3 w-3" />
                                  Ver Código
                                </Button>
                              </Link>
                            )}
                            {project.livePreview && (
                              <Link href={project.livePreview} target="_blank">
                                <Button variant="secondary" size="sm">
                                  <ExternalLink className="mr-2 h-3 w-3" />
                                  Ver Demo
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

