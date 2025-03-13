import Link from "next/link"
import { ArrowLeft, Calendar, Download, GraduationCap, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data - in a real app, this would come from a database
const projects = [
  {
    id: "1",
    title: "Physics Motion Analysis",
    description:
      "Analyzed the motion of projectiles and created a mathematical model to predict trajectories. The project involved collecting data from real-world experiments, analyzing the results using mathematical principles, and creating a computer simulation to visualize the findings. The final report included a detailed explanation of the physics concepts involved, the methodology used, and the conclusions drawn from the data.",
    course: "Physics",
    date: "2023-11-15",
    grade: "A",
    percentage: 95,
    teacher: "Dr. Richard Feynman",
    feedback:
      "Excellent work! Your analysis shows a deep understanding of the principles of motion. The mathematical model you developed accurately predicts the trajectory of the projectiles, and your experimental design was well thought out. The visual presentation of your data was particularly impressive.",
    image: "/placeholder.svg?height=300&width=600",
    attachments: [
      { name: "Final Report.pdf", size: "2.4 MB" },
      { name: "Data Analysis.xlsx", size: "1.1 MB" },
      { name: "Presentation Slides.pptx", size: "3.7 MB" },
    ],
  },
  {
    id: "2",
    title: "Literary Analysis Essay",
    description: "Critical analysis of themes and character development in 'To Kill a Mockingbird'.",
    course: "English Literature",
    date: "2023-10-20",
    grade: "A-",
    percentage: 92,
    teacher: "Ms. Harper Lee",
    feedback:
      "Your analysis of the novel's themes is insightful and well-supported by textual evidence. Your writing is clear and engaging, though there are a few areas where your argument could be strengthened with additional examples.",
    image: "/placeholder.svg?height=300&width=600",
    attachments: [
      { name: "Essay.docx", size: "1.2 MB" },
      { name: "Research Notes.pdf", size: "0.8 MB" },
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id) || projects[0]

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
              <div className="flex items-center">
                <GraduationCap className="mr-1 h-4 w-4" />
                <span>{project.course}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <Badge
                className="ml-2"
                variant={
                  project.grade.startsWith("A") ? "default" : project.grade.startsWith("B") ? "secondary" : "outline"
                }
              >
                {project.grade} ({project.percentage}%)
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button>
              <PenLine className="mr-2 h-4 w-4" />
              Edit Project
            </Button>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Project Description</h2>
                <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Teacher Feedback</h2>
                <div className="bg-muted/50 p-4 rounded-lg border">
                  <p className="italic text-muted-foreground">"{project.feedback}"</p>
                  <p className="mt-2 text-sm font-medium">— {project.teacher}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Course</h3>
                    <p>{project.course}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Submission Date</h3>
                    <p>{new Date(project.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Grade</h3>
                    <p>
                      {project.grade} ({project.percentage}%)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Teacher</h3>
                    <p>{project.teacher}</p>
                  </div>
                </div>

                <h2 className="text-lg font-semibold mt-8 mb-4">Attachments</h2>
                <div className="space-y-2">
                  {project.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                      <span className="text-sm">{attachment.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{attachment.size}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

