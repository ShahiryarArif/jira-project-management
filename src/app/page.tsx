import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Test from "@/features/test";

export default function Home() {
  return (
    <>
      <Input type="text" placeholder="Input" />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teritary">Teritary</Button>
    </>
  );
}
