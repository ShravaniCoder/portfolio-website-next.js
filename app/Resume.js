// pages/Resume.js

import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();
  const { resumeFile } = router.query;

  return (
    <div>
      <embed
        src={resumeFile}
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default Resume;
