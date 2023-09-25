class InitializeVehicles < ActiveRecord::Migration[7.0]
  def up
    Vehicle.create(
      name: "Super Duper Vehicle",
      description: "An confident an futuristic version of all terrain pickup",
      price: 20000.00,
      photo: "https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBZu9r6FDBzFsC-K13-wIdpBV3ncfnI35pQJfcRzpkOO0MOq_16QER_pHSAf7RZvXnTZYJ_SnasIVS8mUjoq06_-bWpbQ=w1868-h903",
      photo_back: "https://example.com/images/toyota_corolla_back.jpg",
      photo_left: "https://example.com/images/toyota_corolla_left.jpg",
      photo_right: "https://example.com/images/toyota_corolla_right.jpg"
    )
    
    Vehicle.create(
      name: "Honda Civic",
      description: "Un compacto con un rendimiento deportivo.",
      price: 22000.00,
      photo: "https://example.com/images/honda_civic_front.jpg",
      photo_back: "https://example.com/images/honda_civic_back.jpg",
      photo_left: "https://example.com/images/honda_civic_left.jpg",
      photo_right: "https://example.com/images/honda_civic_right.jpg"
    )
    
    Vehicle.create(
      name: "Ford F-150",
      description: "Una camioneta robusta.",
      price: 30000.00,
      photo: "https://example.com/images/ford_f150_front.jpg",
      photo_back: "https://example.com/images/ford_f150_back.jpg",
      photo_left: "https://example.com/images/ford_f150_left.jpg",
      photo_right: "https://example.com/images/ford_f150_right.jpg"
    )    
  end

  def down
    Vehicle.delete_all
  end
end