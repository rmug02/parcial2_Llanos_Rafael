export const Inicio = () => {
  return (
    <>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-12 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Bienvenidos a Fragancias R.L</h1>
            <h3 className="fw-normal text-muted mb-3">
            Despierta tus sentidos, descubre tu esencia
            </h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Mis Aromas</h2>
              <p className="lead">Descubre fragancias magicas</p>
            </div>
            <div
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{
                
                width: "80%",
                height: "300px",
                borderRadius: "21px 21 px 0 0",
                
              }}
            ></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Explorar mas</h2>
              <p className="lead">Encuentra tu aroma</p>
              
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21 px 0 0",
              }}
            ></div>
          </div>
        </div>

        
      </main>
    </>
  );
};
