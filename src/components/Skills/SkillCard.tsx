import { ReactNode } from "react";
import { Card } from "./style";

interface SkillCardProps{
  children: ReactNode;
  color: string;
}

export function SkillCard({children, color}:SkillCardProps){
  return(
    <Card className={color}>
      {children}
    </Card>
  )
}