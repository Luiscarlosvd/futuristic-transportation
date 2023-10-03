class InitializeVehicles < ActiveRecord::Migration[7.0]
  def up
    Vehicle.create(
      name: "2024 Mustang® GT Fastback",
      description: "The 2024 Mustang GT coupe with the Gen-4 5.0L Coyote V8 engine generates a track-ready 486 horsepower and 418 lb.-ft. of torque.",
      price: 42495,
      photo: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/1/vehicle.png
      ",
      photo_back: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/2/vehicle.png"
    )
    
    Vehicle.create(
      name: "Mustang® Dark Horse",
      description: "The brand-new 2024 Mustang Dark Horse model is powered by a naturally aspirated Gen-4 5.0L Coyote V8 engine kicking out 500 horsepower, and 418 lb.-ft. of torque.That’s 100 hp/L for a visceral driving experience.",
      price: 22000.00,
      photo: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C200A...PAE..883.89W.13B.COU.64F.99H.44U.EBST.YZTAC.%5D/EXT/1/vehicle.png
      ",
      photo_back: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C200A...PAE..883.89W.13B.COU.64F.99H.44U.EBST.YZTAC.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C200A...PAE..883.89W.13B.COU.64F.99H.44U.EBST.YZTAC.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C200A...PAE..883.89W.13B.COU.64F.99H.44U.EBST.YZTAC.%5D/EXT/2/vehicle.png"
    )
    
    Vehicle.create(
      name: "2024 Mustang® Dark Horse™ Premium",
      description: "The brand-new 2024 Mustang Dark Horse model is powered by a naturally aspirated Gen-4 5.0L Coyote V8 engine kicking out 500 horsepower, and 418 lb.-ft. of torque.That’s 100 hp/L for a visceral driving experience.",
      price: 30920.00,
      photo: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C700A.P8R..PK1..88A.89A.~12A00_BCMAG.68B.576.97B.B5WDB.BBHAU.13K.COU.BSHCV.BY1AJ.BYBBR.BYPBC.858.LTS.64R.TBC.D5HAB.50C.RWD.67J.96D.45B.45T.990.19X.18Z.63V.FS--A.GCEAE.52B.GTDAC.91B.HLLAD.HNAAJ.SSR.58X.17P.SY4.IGDAC.JCBAP.44E.MAC.YZTAC.CVN.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C700A.P8R..PK1..88A.89A.~12A00_BCMAG.68B.576.97B.B5WDB.BBHAU.13K.COU.BSHCV.BY1AJ.BYBBR.BYPBC.858.LTS.64R.TBC.D5HAB.50C.RWD.67J.96D.45B.45T.990.19X.18Z.63V.FS--A.GCEAE.52B.GTDAC.91B.HLLAD.HNAAJ.SSR.58X.17P.SY4.IGDAC.JCBAP.44E.MAC.YZTAC.CVN.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C700A.P8R..PK1..88A.89A.~12A00_BCMAG.68B.576.97B.B5WDB.BBHAU.13K.COU.BSHCV.BY1AJ.BYBBR.BYPBC.858.LTS.64R.TBC.D5HAB.50C.RWD.67J.96D.45B.45T.990.19X.18Z.63V.FS--A.GCEAE.52B.GTDAC.91B.HLLAD.HNAAJ.SSR.58X.17P.SY4.IGDAC.JCBAP.44E.MAC.YZTAC.CVN.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C700A.P8R..PK1..88A.89A.~12A00_BCMAG.68B.576.97B.B5WDB.BBHAU.13K.COU.BSHCV.BY1AJ.BYBBR.BYPBC.858.LTS.64R.TBC.D5HAB.50C.RWD.67J.96D.45B.45T.990.19X.18Z.63V.FS--A.GCEAE.52B.GTDAC.91B.HLLAD.HNAAJ.SSR.58X.17P.SY4.IGDAC.JCBAP.44E.MAC.YZTAC.CVN.%5D/EXT/2/vehicle.png"
    )

    Vehicle.create(
      name: "Mustang® Gray",
      description: "The brand-new 2024 Mustang Dark Horse model is powered by a naturally aspirated Gen-4 5.0L Coyote V8 engine kicking out 500 horsepower, and 418 lb.-ft. of torque.That’s 100 hp/L for a visceral driving experience.",
      price: 30000.00,
      photo: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C400A.P8C..PJS..889.89W.~5V900_BCMAD.576.BBHAU.BCMAD.13R.COU.BSHCX.BY1AJ.BYBBR.BYPAC.CJPAA.LTS.51W.64V.TC8.RWD.45D.99F.FS--A.GCEAE.52B.HLLAD.SSR.58X.IDBAG.SY4.IGDAC.JCBAP.44X.GT.YZTAC.LET.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C400A.P8C..PJS..889.89W.~5V900_BCMAD.576.BBHAU.BCMAD.13R.COU.BSHCX.BY1AJ.BYBBR.BYPAC.CJPAA.LTS.51W.64V.TC8.RWD.45D.99F.FS--A.GCEAE.52B.HLLAD.SSR.58X.IDBAG.SY4.IGDAC.JCBAP.44X.GT.YZTAC.LET.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C400A.P8C..PJS..889.89W.~5V900_BCMAD.576.BBHAU.BCMAD.13R.COU.BSHCX.BY1AJ.BYBBR.BYPAC.CJPAA.LTS.51W.64V.TC8.RWD.45D.99F.FS--A.GCEAE.52B.HLLAD.SSR.58X.IDBAG.SY4.IGDAC.JCBAP.44X.GT.YZTAC.LET.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C400A.P8C..PJS..889.89W.~5V900_BCMAD.576.BBHAU.BCMAD.13R.COU.BSHCX.BY1AJ.BYBBR.BYPAC.CJPAA.LTS.51W.64V.TC8.RWD.45D.99F.FS--A.GCEAE.52B.HLLAD.SSR.58X.IDBAG.SY4.IGDAC.JCBAP.44X.GT.YZTAC.LET.%5D/EXT/2/vehicle.png"
    )

    Vehicle.create(
      name: "Mustang® EcoBoost® Fastback",
      description: "The latest turbocharged 2.3L EcoBoost engine delivers 315 horsepower and 350 lb.-ft. of torque. It features new Modular Power Cylinder (MPC) engine architecture to help improve performance.",
      price: 30000.00,
      photo: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C100A.P8T..PYZ..88D.89W.~2WD00_BCMAB.AC--C.13A.COU.BSHEH.BYBBR.CJPAA.LTS.64Y.TDP.RWD.45Y.99H.FS--A.HLLAD.58V.IDBAD.SY4.44U.EBST.YZTAB.CLO.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C100A.P8T..PYZ..88D.89W.~2WD00_BCMAB.AC--C.13A.COU.BSHEH.BYBBR.CJPAA.LTS.64Y.TDP.RWD.45Y.99H.FS--A.HLLAD.58V.IDBAD.SY4.44U.EBST.YZTAB.CLO.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C100A.P8T..PYZ..88D.89W.~2WD00_BCMAB.AC--C.13A.COU.BSHEH.BYBBR.CJPAA.LTS.64Y.TDP.RWD.45Y.99H.FS--A.HLLAD.58V.IDBAD.SY4.44U.EBST.YZTAB.CLO.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C100A.P8T..PYZ..88D.89W.~2WD00_BCMAB.AC--C.13A.COU.BSHEH.BYBBR.CJPAA.LTS.64Y.TDP.RWD.45Y.99H.FS--A.HLLAD.58V.IDBAD.SY4.44U.EBST.YZTAB.CLO.%5D/EXT/2/vehicle.png"
    )
    
    Vehicle.create(
      name: "2023 Bronco® Raptor®",
      description: "Delivers a brutish 418 horsepower and 440 lb.-ft. of torque. Paired with a 10-speed automatic transmission to take on the roughest terrain.",
      price: 86580.00,
      photo: "https://build.ford.com/dig/Ford/Bronco/2023/HD-TILE/Image%5B%7CFord%7CBronco%7C2023%7C1%7C1.%7C373A...PCN..883.89V.16B.43L.574.66C.4DR.64S.THM.99R.50A.67X.67H.77W.44T.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Bronco/2023/HD-TILE/Image%5B%7CFord%7CBronco%7C2023%7C1%7C1.%7C373A...PCN..883.89V.16B.43L.574.66C.4DR.64S.THM.99R.50A.67X.67H.77W.44T.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Bronco/2023/HD-TILE/Image%5B%7CFord%7CBronco%7C2023%7C1%7C1.%7C373A...PCN..883.89V.16B.43L.574.66C.4DR.64S.THM.99R.50A.67X.67H.77W.44T.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Bronco/2023/HD-TILE/Image%5B%7CFord%7CBronco%7C2023%7C1%7C1.%7C373A...PCN..883.89V.16B.43L.574.66C.4DR.64S.THM.99R.50A.67X.67H.77W.44T.%5D/EXT/2/vehicle.png"
    )
    
    Vehicle.create(
      name: "2024 Bronco® Heritage Limited Edition",
      description: "Capability for the trail. Connectivity to keep you in touch. Stories you'll tell for years",
      price: 39130.00,
      photo: "https://build.ford.com/dig/Ford/Bronco/2024/HD-TILE/Image%5B%7CFord%7CBronco%7C2024%7C1%7C1.%7C664A.E4E..PCW..88Y.89V.61L.65H.765.43Y.574.66C.87B.60B.18D.2DR.55B.643.THQ.60R.ESO.X7L.RLD.99P.85H.85C.67X.59A.65P.58P.SRS.17Q.85W.67H.65F.91S.77H.44T.65C.85B.PPL.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Bronco/2024/HD-TILE/Image%5B%7CFord%7CBronco%7C2024%7C1%7C1.%7C664A.E4E..PCW..88Y.89V.61L.65H.765.43Y.574.66C.87B.60B.18D.2DR.55B.643.THQ.60R.ESO.X7L.RLD.99P.85H.85C.67X.59A.65P.58P.SRS.17Q.85W.67H.65F.91S.77H.44T.65C.85B.PPL.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Bronco/2024/HD-TILE/Image%5B%7CFord%7CBronco%7C2024%7C1%7C1.%7C664A.E4E..PCW..88Y.89V.61L.65H.765.43Y.574.66C.87B.60B.18D.2DR.55B.643.THQ.60R.ESO.X7L.RLD.99P.85H.85C.67X.59A.65P.58P.SRS.17Q.85W.67H.65F.91S.77H.44T.65C.85B.PPL.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Bronco/2024/HD-TILE/Image%5B%7CFord%7CBronco%7C2024%7C1%7C1.%7C664A.E4E..PCW..88Y.89V.61L.65H.765.43Y.574.66C.87B.60B.18D.2DR.55B.643.THQ.60R.ESO.X7L.RLD.99P.85H.85C.67X.59A.65P.58P.SRS.17Q.85W.67H.65F.91S.77H.44T.65C.85B.PPL.%5D/EXT/2/vehicle.png"
    )

    Vehicle.create(
      name: "2024 Expedition® XLT",
      description: "Ambition for new adventure. Performance and space to spare.",
      price: 55525.00,
      photo: "https://build.ford.com/dig/Ford/Expedition/2024/HD-TILE/Image%5B%7CFord%7CExpedition%7C2024%7C1%7C1.%7C104A...PYZ..88L.89H.774.18B.BYBAW.BS1.64X.4x2.998.%5D/EXT/1/vehicle.png",
      photo_back: "https://build.ford.com/dig/Ford/Expedition/2024/HD-TILE/Image%5B%7CFord%7CExpedition%7C2024%7C1%7C1.%7C104A...PYZ..88L.89H.774.18B.BYBAW.BS1.64X.4x2.998.%5D/EXT/5/vehicle.png",
      photo_left: "https://build.ford.com/dig/Ford/Expedition/2024/HD-TILE/Image%5B%7CFord%7CExpedition%7C2024%7C1%7C1.%7C104A...PYZ..88L.89H.774.18B.BYBAW.BS1.64X.4x2.998.%5D/EXT/3/vehicle.png",
      photo_right: "https://build.ford.com/dig/Ford/Expedition/2024/HD-TILE/Image%5B%7CFord%7CExpedition%7C2024%7C1%7C1.%7C104A...PYZ..88L.89H.774.18B.BYBAW.BS1.64X.4x2.998.%5D/EXT/2/vehicle.png"
    )
  end

  def down
    Vehicle.delete_all
  end
end
