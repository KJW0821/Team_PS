import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>
        <i>{error.status + " " + error.statusText || error.message}</i>
      </p>
    </div>
  )
}
