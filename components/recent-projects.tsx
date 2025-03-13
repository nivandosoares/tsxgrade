import { Calendar, FileText, GraduationCap, Github, Database, Globe, Smartphone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Dados dos projetos do aluno
const featuredProjects = [
  {
    id: "1",
    title: "Desenvolvimento Mobile",
    description: "Aplicativo móvel desenvolvido java nativo para uma hamburgueria.",
    course: "Desenvolvimento Mobile",
    date: "2023-03-15",
    semester: "5º Semestre",
    image: "/images/android.png",
    pdfLink: "/portfolios/semestre5/MOBILE.pdf",
    githubLink: "https://github.com/nivandosoares/cinema",
    icon: <Smartphone className="h-10 w-10 text-purple-500" />,
    featured: true,
    category: "mobile",
  },
  {
    id: "2",
    title: "Desenvolvimento Web",
    description:
      "Site responsivo para descoberta de signo através da data de nascimento usando PHP.",
    course: "Programação Web",
    date: "2023-11-10",
    semester: "4º Semestre",
    image: "/images/php.svg?height=200&width=400",
    pdfLink: "/portfolios/semestre4/WEB.pdf",
    githubLink: "https://github.com/nivandosoares/descubra_seu_signo",
    livePreview: "https://8000-cs-1050912283472-default.cs-us-east1-yeah.cloudshell.dev/index.php",
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "Sistema de Banco de Dados",
    description: "Projeto e criação de um  banco de dados para uma biblioteca usando SQL.",
    course: "Programação e Desenvolvimento de Banco de Dados",
    date: "2023-10-25",
    semester: "4º Semestre",
    image: "/images/sql.svg?height=200&width=400",
    pdfLink: "/portfolios/semestre4/DADOS.pdf",
    githubLink: "https://gist.github.com/nivandosoares/eff0de122ed0d89caccd3e74c091e4ef",
    icon: <Database className="h-10 w-10 text-green-500" />,
    featured: true,
    category: "database",
  },
  {
    id: "4",
    title: "Desenvolvimento JavaScript",
    description: "Aplicação web interativa desenvolvida com JavaScript para validação de email usando REGEX.",
    course: "Desenvolvimento em JavaScript",
    date: "2023-02-20",
    semester: "5º Semestre",
    image: "/images/javascript.svg?height=200&width=400",
    pdfLink: "/portfolios/semestre5/JAVASCRIPT.pdf",
    githubLink: "https://github.com/nivandosoares/javascript-projects",
    icon: <Globe className="h-10 w-10 text-yellow-500" />,
    featured: true,
    category: "web",
  },
]

// Outros projetos
const otherProjects = [
  {
    id: "5",
    title: "Análise Orientada a Objetos",
    description: "Desenvolvimento de um sistema de locação de veículos com diagrama de classes.",
    course: "Análise Orientada a Objetos",
    date: "2023-05-15",
    semester: "3º Semestre",
    image: "/images/diagram.svg?height=100&width=200",
    pdfLink: "/portfolios/semestre3/ANALISEOBJ.pdf",
    githubLink: null,
  },
  {
    id: "6",
    title: "Gerenciamento Bancário em Java",
    description: "Aplicação de gerenciamento bancário utilizando conceitos de Orientação a Objetos.",
    course: "Linguagem Orientada a Objetos",
    date: "2023-06-10",
    semester: "3º Semestre",
    image: "/images/java.svg?height=100&width=200",
    pdfLink: "/portfolios/semestre3/LINGUAGEMOBJ.pdf",
    githubLink: "https://gist.github.com/nivandosoares/1b2ef0c7246469c0824ea8626f7e252b",
  },
  {
    id: "7",
    title: "Projeto de Extensão I",
    description: "Projeto de extensão universitária com foco em desenvolvimento de soluções para a comunidade.",
    course: "Projeto de Extensão I",
    date: "2023-06-15",
    semester: "2º Semestre",
    image: "/images/group.svg?height=100&width=200",
    pdfLink: "/portfolios/extensao/ext1.pdf",
    githubLink: null,
  },
  {
    id: "8",
    title: "Projeto de Extensão II",
    description: "Continuação do projeto de extensão com implementação de novas funcionalidades e melhorias.",
    course: "Projeto de Extensão II",
    date: "2023-05-20",
    semester: "5º Semestre",
    image: "/images/group.svg?height=100&width=200",
    pdfLink: "/portfolios/extensao/ext2.docx",
    githubLink: null,
  },
]

export function RecentProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projetos Destacados</CardTitle>
        <CardDescription>Exiba seus melhores trabalhos acadêmicos</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Featured Projects Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.id} className={`overflow-hidden ${project.githubLink ? "border-2 border-primary" : ""}`}>
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
                {project.githubLink && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black text-white">
                      <Github className="h-3 w-3 mr-1" /> GitHub
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-muted">{project.icon}</div>
                  <div className="flex-1">
                    <Badge className="mb-2">{project.semester}</Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>

                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>{project.course}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.date).toLocaleDateString("pt-BR")}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.pdfLink && (
                        <Link href={project.pdfLink} target="_blank">
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Relatório PDF
                          </Button>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link href={project.githubLink} target="_blank">
                          <Button variant="default" size="sm">
                            <Github className="mr-2 h-4 w-4" />
                            Ver Código
                          </Button>
                        </Link>
                      )}
                      {project.livePreview && (
                        <Link href={project.livePreview} target="_blank">
                          <Button variant="secondary" size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Outros Projetos</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className={`overflow-hidden ${project.githubLink ? "border-l-4 border-primary" : ""}`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">{project.semester}</Badge>
                  <h3 className="font-semibold line-clamp-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{project.course}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(project.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    {project.pdfLink && (
                      <Link href={project.pdfLink} target="_blank">
                        <Button variant="outline" size="sm" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          Relatório PDF
                        </Button>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank">
                        <Button variant={project.githubLink ? "default" : "outline"} size="sm" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Ver Código
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

