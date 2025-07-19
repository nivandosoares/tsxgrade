"use client"

import { useState } from "react"
import { BookOpen, Calendar, GraduationCap, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export function UserProfile() {
  const [studentInfo, setStudentInfo] = useState({
      name: "Nivando Soares",
      grade: "Formado",
      school: "Análise e Desenvolvimento de Sistemas",
      startYear: "2022",
      graduationYear: "2025",  
  })

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <ThemeToggle />
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src="/images/profile.jpeg" alt={studentInfo.name} />
            <AvatarFallback className="text-2xl">
              {studentInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold">{studentInfo.name}</h1>
                <p className="text-muted-foreground">
                  {studentInfo.grade} • {studentInfo.school}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <GraduationCap className="mr-1 h-4 w-4" />
                <span>Início em {studentInfo.startYear}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Formatura em {studentInfo.graduationYear}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="mr-1 h-4 w-4" />
                <span>28 Disciplinas Concluídas</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-1 h-4 w-4" />
                <span>Progresso: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

