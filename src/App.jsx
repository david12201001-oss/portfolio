function App() {
  return (
    <main className="app">
      <header className="page-section page-header">
        <h1 className="site-title">My Video Portfolio</h1>
        <nav className="site-nav" aria-label="주요 메뉴">
          <button type="button">소개</button>
          <button type="button">기획서</button>
          <button type="button">영상</button>
          <button type="button">포트폴리오</button>
          <button type="button">연락처</button>
        </nav>
      </header>

      <section className="page-section page-content hero-section">
        <div className="hero-content">
          <h2>Project:[오후]</h2>
          <p className="hero-intro">작업 과정을 디자인과 영상으로 담아내는 공간입니다.</p>
          <p className="hero-description">기획 의도, 제작 과정, 완성된 결과물을 차근차근 보여줄 예정입니다.</p>
          <div className="hero-actions">
            <button type="button">기획서 보기</button>
            <button type="button">영상 보기</button>
          </div>
        </div>
      </section>

      <section className="page-section about-section">
        <div className="about-content">
          <h2>자기소개</h2>
          <div className="about-card-list">
            <article className="about-card">
              <h3>이름</h3>
              <p>오후석</p>
            </article>
            <article className="about-card">
              <h3>관심 분야</h3>
              <p>디자인, 영상 기획, 촬영, 편집</p>
            </article>
            <article className="about-card">
              <h3>강점</h3>
              <p>아이디어를 시각적으로 정리하고 끝까지 완성하는 힘</p>
            </article>
            <article className="about-card">
              <h3>목표</h3>
              <p>나만의 이야기를 담은 영상 포트폴리오를 완성하는 것</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="page-section page-footer">
        <p>footer</p>
      </footer>
    </main>
  )
}

export default App
