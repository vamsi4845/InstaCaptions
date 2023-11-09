import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={'Add Instant Captions with Ease!'}
        h2Text={'Your Ultimate Video Caption Generator'}
      />
      <div className="text-center">
        <UploadForm />
      </div>
    </>
  )
}
