# Insta Captions

Dynamic caption generator for short video content, helping creators add searchable captions that boost video SEO and reach.

## Features

- Dynamic caption generation using AWS Transcription service
- Server-side rendering (SSR) with Next.js
- Modern UI built with Tailwind CSS
- Video caption embedding using ffmpeg
- SEO optimized for better search visibility

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- AWS account with S3 and Transcribe services configured
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vamsi4845/InstaCaptions.git
cd InstaCaptions
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your AWS credentials:
```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_S3_BUCKET_NAME=your_bucket_name
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Links

- Live: [instacaptions.vamsi.app](https://instacaptions.vamsi.app)
- Demo: [Watch Demo Video](https://dar5y10gv8dj8.cloudfront.net/portfolio/chrome_dbkj6cTFUw.mp4)
