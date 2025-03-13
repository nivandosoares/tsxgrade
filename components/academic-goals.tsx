"use client"

import { useState } from "react"
import { Award, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

type Certification = {
  id: string
  title: string
  provider: string
  hours: number
  date: string
  certificateUrl: string
}

export function AcademicGoals() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: "1",
      title: "Bootcamp Full Stack Development",
      provider: "Digitall Innovation One/Eduzz",
      hours: 95,
      date: "2021-05-15",
      certificateUrl: "/extra/fullstack.pdf",
    },
    {
      id: "2",
      title: "Responsive Web Design",
      provider: "Freecodecamp",
      hours: 300,
      date: "2021-11-10",
      certificateUrl: "/extra/certificado_web.pdf",
    },
  ])

  const totalHours = certifications.reduce((sum, cert) => sum + cert.hours, 0)
  const goalHours = 100
  const completionPercentage = Math.min(Math.round((totalHours / goalHours) * 100), 100)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Horas Complementares</CardTitle>
        <CardDescription>Certificados e cursos extracurriculares</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium">Progresso</div>
          <div className="text-sm font-medium">
            {totalHours}/{goalHours} horas ({completionPercentage}%)
          </div>
        </div>
        <Progress value={completionPercentage} className="h-2 mb-6 bg-green-100 dark:bg-green-900">
          <div className="h-full bg-green-500" style={{ width: `${completionPercentage}%` }} />
        </Progress>

        <div className="space-y-4 overflow-auto max-h-[280px] pr-2">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-start gap-3 border-b pb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-400">
                <Award className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{cert.title}</h4>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">{cert.provider}</p>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">{cert.hours} horas</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-muted-foreground">{new Date(cert.date).toLocaleDateString("pt-BR")}</p>
                  <Link href={cert.certificateUrl} target="_blank">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      Certificado
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="w-full flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Última atualização: 10/03/2025</p>
        </div>
      </CardFooter>
    </Card>
  )
}

