# frontend

## 배포

Next.js를 정적 export로 빌드해서 S3와 CloudFront에 배포한다.

```bash
pnpm install --frozen-lockfile
pnpm run build
aws s3 sync ./out s3://studyproject1-frontend-053828498240 --delete
aws cloudfront create-invalidation --distribution-id E3CEU7WO1PTQIY --paths "/*"
```

CloudFront URL:

```text
https://d1u170pc3ilqkh.cloudfront.net
```

## GitHub Actions 자동배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행된다.

GitHub repository secrets에 아래 값을 등록해야 한다.

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION=ap-northeast-2
FRONTEND_BUCKET_NAME=studyproject1-frontend-053828498240
CLOUDFRONT_DISTRIBUTION_ID=E3CEU7WO1PTQIY
NEXT_PUBLIC_API_BASE_URL=https://api.fsimulation.store
```
