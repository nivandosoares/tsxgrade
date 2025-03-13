"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp, Code, Database, Layout, Server, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

// Dados das áreas de habilidade
const subjects = [
  {
    id: "1",
    name: "Programação",
    icon: <Code className="h-5 w-5" />,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
    progress: 95,
    trend: "+8%",
    courses: [
      { course: "Algoritmos e Programação Estruturada", grade: "10.0", term: "2º Semestre" },
      { course: "Linguagem de Programação", grade: "10.0", term: "2º Semestre" },
      { course: "Linguagem Orientada a Objetos", grade: "10.0", term: "3º Semestre" },
      { course: "Desenvolvimento em JavaScript", grade: "Cursando", term: "5º Semestre" },
    ],
  },
  {
    id: "2",
    name: "Banco de Dados",
    icon: <Database className="h-5 w-5" />,
    color: "bg-green-500",
    textColor: "text-green-500",
    borderColor: "border-green-500",
    progress: 100,
    trend: "+5%",
    courses: [
      { course: "Modelagem de Dados", grade: "10.0", term: "3º Semestre" },
      { course: "Programação e Desenvolvimento de Banco de Dados", grade: "10.0", term: "4º Semestre" },
    ],
  },
  {
    id: "3",
    name: "Desenvolvimento Web",
    icon: <Layout className="h-5 w-5" />,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-500",
    progress: 90,
    trend: "+10%",
    courses: [
      { course: "Interface e Usabilidade", grade: "10.0", term: "1º Semestre" },
      { course: "Programação Web", grade: "10.0", term: "4º Semestre" },
      { course: "Desenvolvimento Responsivo", grade: "9.34", term: "5º Semestre" },
    ],
  },
  {
    id: "4",
    name: "Infraestrutura",
    icon: <Server className="h-5 w-5" />,
    color: "bg-amber-500",
    textColor: "text-amber-500",
    borderColor: "border-amber-500",
    progress: 92,
    trend: "+6%",
    courses: [
      { course: "Arquitetura e Organização de Computadores", grade: "10.0", term: "1º Semestre" },
      { course: "Redes de Computadores", grade: "10.0", term: "1º Semestre" },
      { course: "Sistemas Operacionais", grade: "10.0", term: "3º Semestre" },
      { course: "Computação em Nuvem", grade: "10.0", term: "4º Semestre" },
    ],
  },
  {
    id: "5",
    name: "Design de Software",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-red-500",
    textColor: "text-red-500",
    borderColor: "border-red-500",
    progress: 88,
    trend: "+4%",
    courses: [
      { course: "Projeto de Software", grade: "9.94", term: "1º Semestre" },
      { course: "Análise e Modelagem de Sistemas", grade: "9.91", term: "2º Semestre" },
      { course: "Engenharia de Software", grade: "8.84", term: "2º Semestre" },
      { course: "Análise Orientada a Objetos", grade: "8.61", term: "3º Semestre" },
    ],
  },
]

export function SubjectCards() {
  const [openSubject, setOpenSubject] = useState<string | null>(null)

  const toggleSubject = (id: string) => {
    setOpenSubject(openSubject === id ? null : id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Áreas de Habilidade</CardTitle>
        <CardDescription>Acompanhe seu progresso em diferentes áreas de conhecimento</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-blue-500 hover:bg-blue-600">Programação</Badge>
          <Badge className="bg-green-500 hover:bg-green-600">Banco de Dados</Badge>
          <Badge className="bg-purple-500 hover:bg-purple-600">Desenvolvimento Web</Badge>
          <Badge className="bg-amber-500 hover:bg-amber-600">Infraestrutura</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Design de Software</Badge>
        </div>

        <div className="grid gap-4">
          {subjects.map((subject) => (
            <Collapsible
              key={subject.id}
              open={openSubject === subject.id}
              onOpenChange={() => toggleSubject(subject.id)}
              className="border rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`${subject.color} p-2 rounded-md text-white`}>{subject.icon}</div>
                    <div>
                      <h3 className="font-medium">{subject.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Desempenho Geral</span>
                        <span className={`ml-2 ${subject.textColor} font-medium`}>{subject.trend}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Progresso</span>
                      <div className="text-lg font-bold">{subject.progress}%</div>
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                        {openSubject === subject.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <Progress value={subject.progress} className={`h-2 mt-4`} />
              </div>
              <CollapsibleContent>
                <div className="border-t px-4 py-3 bg-muted/40">
                  <h4 className="text-sm font-medium mb-2">Disciplinas Relacionadas</h4>
                  <div className="space-y-2">
                    {subject.courses.map((course, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-1 h-4 rounded-full ${subject.color}`}></div>
                          <span>{course.course}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground">{course.term}</span>
                          <span className="font-medium">{course.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-right">
                    <Button variant="link" size="sm" className="h-auto p-0">
                      <span>Ver análise detalhada</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

