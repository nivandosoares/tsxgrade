import { GradeOverview } from "@/components/grade-overview"
import { ProgressChart } from "@/components/progress-chart"
import { SubjectCards } from "@/components/subject-cards"
import { RecentProjects } from "@/components/recent-projects"
import { AcademicGoals } from "@/components/academic-goals"
import { UserProfile } from "@/components/user-profile"
import { SemesterDetails } from "@/components/semester-details"
import { ThemeProvider } from "@/components/theme-provider"

export default function Dashboard() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="container py-6 md:py-10">
          <UserProfile />

          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full lg:col-span-2">
              <ProgressChart />
            </div>
            <div className="col-span-full lg:col-span-1">
              <AcademicGoals />
            </div>
            <div className="col-span-full">
              <GradeOverview />
            </div>
            <div className="col-span-full">
              <SubjectCards />
            </div>
            <div className="col-span-full">
              <SemesterDetails />
            </div>
            <div className="col-span-full">
              <RecentProjects />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

