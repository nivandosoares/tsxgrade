"use client"

import { useState } from "react"
import { ArrowUpDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados reais do aluno
const grades = [
  // Primeiro Semestre
  {
    id: "1",
    course: "Arquitetura e Organização de Computadores",
    term: "1º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "2",
    course: "Interface e Usabilidade",
    term: "1º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "3",
    course: "Projeto de Software",
    term: "1º Semestre",
    grade: "9.94",
    percentage: 99.4,
    status: "Concluída",
  },
  {
    id: "4",
    course: "Redes de Computadores",
    term: "1º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "5",
    course: "Segurança e Auditoria de Sistemas",
    term: "1º Semestre",
    grade: "8.29",
    percentage: 82.9,
    status: "Concluída",
  },
  {
    id: "6",
    course: "Sociedade Brasileira e Cidadania",
    term: "1º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },

  // Segundo Semestre
  {
    id: "7",
    course: "Algoritmos e Programação Estruturada",
    term: "2º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "8",
    course: "Análise e Modelagem de Sistemas",
    term: "2º Semestre",
    grade: "9.91",
    percentage: 99.1,
    status: "Concluída",
  },
  {
    id: "9",
    course: "Engenharia de Software",
    term: "2º Semestre",
    grade: "8.84",
    percentage: 88.4,
    status: "Concluída",
  },
  {
    id: "10",
    course: "Linguagem de Programação",
    term: "2º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "11",
    course: "Lógica e Matemática Computacional",
    term: "2º Semestre",
    grade: "9.56",
    percentage: 95.6,
    status: "Concluída",
  },

  // Terceiro Semestre
  {
    id: "12",
    course: "Análise Orientada a Objetos",
    term: "3º Semestre",
    grade: "8.61",
    percentage: 86.1,
    status: "Concluída",
  },
  {
    id: "13",
    course: "Linguagem Orientada a Objetos",
    term: "3º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "14",
    course: "Modelagem de Dados",
    term: "3º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "15",
    course: "Projeto de Extensão I",
    term: "3º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "16",
    course: "Qualidade e Automação de Testes",
    term: "3º Semestre",
    grade: "8.51",
    percentage: 85.1,
    status: "Concluída",
  },
  {
    id: "17",
    course: "Sistemas Operacionais",
    term: "3º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },

  // Quarto Semestre
  {
    id: "18",
    course: "Computação em Nuvem",
    term: "4º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "19",
    course: "Governança de Tecnologia",
    term: "4º Semestre",
    grade: "9.01",
    percentage: 90.1,
    status: "Concluída",
  },
  {
    id: "20",
    course: "Green IT",
    term: "4º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "21",
    course: "Programação e Desenvolvimento de Banco de Dados",
    term: "4º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "22",
    course: "Programação Web",
    term: "4º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },

  // Quinto Semestre
  {
    id: "23",
    course: "Desenvolvimento em JavaScript",
    term: "5º Semestre",
    grade: "Cursando",
    percentage: 0,
    status: "Em Andamento",
  },
  {
    id: "24",
    course: "Desenvolvimento Mobile",
    term: "5º Semestre",
    grade: "Cursando",
    percentage: 0,
    status: "Em Andamento",
  },
  {
    id: "25",
    course: "Desenvolvimento Responsivo",
    term: "5º Semestre",
    grade: "9.34",
    percentage: 93.4,
    status: "Concluída",
  },
  {
    id: "26",
    course: "Frameworks para Desenvolvimento de Software",
    term: "5º Semestre",
    grade: "6.00",
    percentage: 60,
    status: "Em Andamento",
  },
  {
    id: "27",
    course: "Projeto de Extensão II",
    term: "5º Semestre",
    grade: "10.0",
    percentage: 100,
    status: "Concluída",
  },
  {
    id: "28",
    course: "Sistemas Distribuídos",
    term: "5º Semestre",
    grade: "7.00",
    percentage: 70,
    status: "Em Andamento",
  },
]

export function GradeOverview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [termFilter, setTermFilter] = useState("all")

  const filteredGrades = grades.filter((grade) => {
    const matchesSearch = grade.course.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTerm = termFilter === "all" || grade.term === termFilter
    return matchesSearch && matchesTerm
  })

  const terms = Array.from(new Set(grades.map((grade) => grade.term)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Notas</CardTitle>
        <CardDescription>Notas por disciplina</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar disciplinas..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={termFilter} onValueChange={setTermFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filtrar por semestre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Semestres</SelectItem>
              {terms.map((term) => (
                <SelectItem key={term} value={term}>
                  {term}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="p-0 hover:bg-transparent">
                    <span>Disciplina</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Semestre</TableHead>
                <TableHead>Nota</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell className="font-medium">{grade.course}</TableCell>
                  <TableCell>{grade.term}</TableCell>
                  <TableCell>
                    {grade.grade !== "Cursando" ? (
                      <span
                        className={`font-medium ${
                          Number.parseFloat(grade.grade) >= 9
                            ? "text-green-600"
                            : Number.parseFloat(grade.grade) >= 8
                              ? "text-blue-600"
                              : Number.parseFloat(grade.grade) >= 7
                                ? "text-amber-600"
                                : "text-red-600"
                        }`}
                      >
                        {grade.grade}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">Cursando</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        grade.status === "Concluída"
                          ? "default"
                          : grade.status === "Em Andamento"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {grade.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

