export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="w-full max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Finance Simulator
        </p>
        <h1 className="text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
          금융 시뮬레이션 서비스를 준비 중입니다.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          프론트엔드는 S3와 CloudFront로 배포되고, API는 FastAPI 백엔드와
          연결됩니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            href="https://api.fsimulation.store/docs"
          >
            API 문서 보기
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100"
            href="https://api.fsimulation.store/health"
          >
            헬스체크 확인
          </a>
        </div>
      </section>
    </main>
  );
}
