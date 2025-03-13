"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

const students = [
  { id: "1", name: "Alex Johnson" },
  { id: "2", name: "Jamie Smith" },
  { id: "3", name: "Taylor Brown" },
  { id: "4", name: "Morgan Wilson" },
  { id: "5", name: "Casey Davis" },
]

const projects = [
  { id: "1", title: "Physics Project" },
  { id: "2", title: "Chemistry Lab" },
  { id: "3", title: "Literature Analysis" },
  { id: "4", title: "History Timeline" },
]

export default function NewGradePage() {
  const { toast } = useToast()
  const [linkToProject, setLinkToProject] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Grade added successfully",
      description: "The new grade has been recorded in the system.",
    })
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Grade</CardTitle>
          <CardDescription>Enter grade details for a student assignment</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="student">Student</Label>
                <Select required>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assignment">Assignment Name</Label>
                <Input id="assignment" placeholder="e.g., Midterm Exam" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="grade">Grade (%)</Label>
                <Input id="grade" type="number" min="0" max="100" placeholder="e.g., 95" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" required />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="link-project">Link to Project</Label>
                <Switch id="link-project" checked={linkToProject} onCheckedChange={setLinkToProject} />
              </div>

              {linkToProject && (
                <Select>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea id="comments" placeholder="Add feedback or comments about the student's performance" rows={4} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Save Grade
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

