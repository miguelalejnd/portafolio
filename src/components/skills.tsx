import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import { Cloud, Database, GitBranch, Package2, PanelsTopLeft, ServerCog, } from "lucide-react";

const skillCategories = {
  frontend: {
    icon: <PanelsTopLeft className="w-5 h-5"  />,
    title: 'Frontend',
    skills: [
      { name: 'React', },
      { name: 'JavaScript', },
      { name: 'TypeScript', },
      { name: 'Tailwind CSS', },
      { name: 'Thymeleaf', },
    ]
  },
  backend: {
    icon: <ServerCog className="w-5 h-5" />,
    title: 'Backend',
    skills: [
      { name: 'Java', },
      { name: 'Spring Boot', },
      { name: 'Spring Security', },
      { name: 'Spring JPA - Hibernate', },
    ]
  },
  Databases: {
    icon: <Database className="w-5 h-5" />,
    title: 'BD',
    skills: [
      { name: 'PostgreSQL', },
      { name: 'MariaDB', },
      { name: 'MongoDB', },
    ]
  },
    version: {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'SCV',
    skills: [
      { name: 'Git', },
      { name: 'GitHub', },
      { name: 'GitLab', },
    ]
  },
  DevOps: {
    icon: <Package2 className="w-5 h-5" />,
    title: 'DevOps',
    skills: [
      { name: 'Docker', },
      { name: 'Kubernetes', },
      { name: 'Nginx', },
      { name: 'Linux', },
    ]
  },
  Cloud: {
    icon: <Cloud className="w-5 h-5" />,
    title: 'Cloud',
    skills: [
      { name: 'Azure', },
    ]
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
     <section id="skills" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="my-4">
            Habilidades
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Habilidades t&eacute;cnicas
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Tecnolog&iacute;as y herramientas que domino y utilizo en mis proyectos.
          </p>
        </div>
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 lg:grid-cols-6 h-auto">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="group relative flex flex-col">
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-4 flex gap-3 items-center">
                      {category.icon}
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                      {category.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-1 border rounded-full bg-accent"
                        >
                          <div className="p-4 mx-auto">
                            <p className="font-semibold text-sm">{skill.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

        </div>
      </div>
     </section>
  )
}

export default Skills;