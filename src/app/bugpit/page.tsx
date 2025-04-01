import { BadExampleForAButton } from "@/components/BadExampleForAButton";
import { BadExampleForALinkButton } from "@/components/BadExampleForALinkButton";

export default function BugExamplePage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-2xl font-bold">
        This page is full of accessibility bugs
      </div>
      <a href="/">Back</a>
      <section className="w-full">
        <h2>What to test here</h2>
        <p>
          This page is full of accessibility bugs. Run automated checks and find
          out what the automated testing tools can detect.
        </p>
      </section>
      <div className="flex min-w-60 flex-col gap-2">
        <div className="text-xl font-bold">A buggy form</div>
        <input name="name" placeholder="Name" autoFocus={true} />
        <input name="email" placeholder="Email" />
        <BadExampleForAButton label={"Submit"} />
      </div>
      <div className="flex min-w-60 flex-col gap-2">
        <div className="text-xl font-bold">Images and links</div>
        <img src="/GuideDog1.jpg" width={"300"} height={"190"}></img>
        <BadExampleForALinkButton label={"More Pictures"} />
      </div>
    </div>
  );
}
