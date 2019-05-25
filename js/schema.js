var LAYER_NUMBER = 1

var SCHEMA_GLOBAL = {
  "constructors": [
    {
      "id": "2823855066",
      "predicate": "int",
      "params": [],
      "type": "Int"
    },
    {
      "id": "570911930",
      "predicate": "long",
      "params": [],
      "type": "Long"
    },
    {
      "id": "571523412",
      "predicate": "double",
      "params": [],
      "type": "Double"
    },
    {
      "id": "3039325732",
      "predicate": "string",
      "params": [],
      "type": "String"
    },
    {
      "id": "695225504",
      "predicate": "object",
      "params": [],
      "type": "Object"
    },
    {
      "id": "2060173719",
      "predicate": "function",
      "params": [],
      "type": "Function"
    },
    {
      "id": "407246033",
      "predicate": "bytes",
      "params": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "Bytes"
    },
    {
      "id": "1072550713",
      "predicate": "true",
      "params": [],
      "type": "True"
    },
    {
      "id": "2574415285",
      "predicate": "boolTrue",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "3162085175",
      "predicate": "boolFalse",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "2228025271",
      "predicate": "int128",
      "params": [],
      "type": "Int128"
    },
    {
      "id": "2079189851",
      "predicate": "int256",
      "params": [],
      "type": "Int256"
    },
    {
      "id": "2773961098",
      "predicate": "testObject",
      "params": [
        {
          "name": "value",
          "type": "int"
        },
        {
          "name": "o",
          "type": "object"
        },
        {
          "name": "f",
          "type": "function"
        }
      ],
      "type": "TestObject"
    },
    {
      "id": "3359994313",
      "predicate": "testString",
      "params": [
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "TestObject"
    },
    {
      "id": "731271633",
      "predicate": "testInt",
      "params": [
        {
          "name": "value",
          "type": "int"
        }
      ],
      "type": "TestObject"
    },
    {
      "id": "3622741708",
      "predicate": "testVectorBytes",
      "params": [
        {
          "name": "value",
          "type": "(vector"
        }
      ],
      "type": "TestObject"
    },
    {
      "id": "3697933059",
      "predicate": "tcp.pong",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "tcp.Pong"
    },
    {
      "id": "3720408066",
      "predicate": "fer.raptorQ",
      "params": [
        {
          "name": "symbol_size",
          "type": "int"
        },
        {
          "name": "total_symbols",
          "type": "int"
        },
        {
          "name": "total_size",
          "type": "int"
        }
      ],
      "type": "fer.Type"
    },
    {
      "id": "955691373",
      "predicate": "fer.simple",
      "params": [
        {
          "name": "symbol_size",
          "type": "int"
        },
        {
          "name": "total_symbols",
          "type": "int"
        },
        {
          "name": "total_size",
          "type": "int"
        }
      ],
      "type": "fer.Type"
    },
    {
      "id": "1044342095",
      "predicate": "adnl.id.short",
      "params": [
        {
          "name": "id",
          "type": "int256"
        }
      ],
      "type": "adnl.id.Short"
    },
    {
      "id": "2160603872",
      "predicate": "adnl.id.pk.unenc",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "adnl.id.Pk"
    },
    {
      "id": "2434546886",
      "predicate": "adnl.id.pk.ed25519",
      "params": [
        {
          "name": "key",
          "type": "int256"
        }
      ],
      "type": "adnl.id.Pk"
    },
    {
      "id": "1558834017",
      "predicate": "adnl.id.pk.aes",
      "params": [
        {
          "name": "key",
          "type": "int256"
        }
      ],
      "type": "adnl.id.Pk"
    },
    {
      "id": "4023511434",
      "predicate": "adnl.id.pk.overlay",
      "params": [
        {
          "name": "name",
          "type": "bytes"
        }
      ],
      "type": "adnl.id.Pk"
    },
    {
      "id": "2317844878",
      "predicate": "adnl.id.ed25519",
      "params": [
        {
          "name": "key",
          "type": "int256"
        }
      ],
      "type": "adnl.id.Full"
    },
    {
      "id": "2451665690",
      "predicate": "adnl.id.aes",
      "params": [
        {
          "name": "key",
          "type": "int256"
        }
      ],
      "type": "adnl.id.Full"
    },
    {
      "id": "3513021154",
      "predicate": "adnl.id.unenc",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "adnl.id.Full"
    },
    {
      "id": "542300433",
      "predicate": "adnl.id.overlay",
      "params": [
        {
          "name": "name",
          "type": "bytes"
        }
      ],
      "type": "adnl.id.Full"
    },
    {
      "id": "1728947943",
      "predicate": "adnl.address.udp",
      "params": [
        {
          "name": "ip",
          "type": "int"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "adnl.Address"
    },
    {
      "id": "3810354170",
      "predicate": "adnl.address.udp6",
      "params": [
        {
          "name": "ip",
          "type": "int128"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "adnl.Address"
    },
    {
      "id": "3276932360",
      "predicate": "adnl.address.tcp",
      "params": [
        {
          "name": "ip",
          "type": "int"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "adnl.Address"
    },
    {
      "id": "1520957383",
      "predicate": "adnl.address.tcp6",
      "params": [
        {
          "name": "ip",
          "type": "int128"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "adnl.Address"
    },
    {
      "id": "1870715901",
      "predicate": "adnl.address.tunnel",
      "params": [
        {
          "name": "to",
          "type": "adnl.Address"
        },
        {
          "name": "tunid",
          "type": "adnl.id.Full"
        }
      ],
      "type": "adnl.Address"
    },
    {
      "id": "3842893590",
      "predicate": "adnl.addressList",
      "params": [
        {
          "name": "addrs",
          "type": "(vector"
        },
        {
          "name": "adnl.Address) version",
          "type": "int"
        }
      ],
      "type": "adnl.AddressList"
    },
    {
      "id": "620296016",
      "predicate": "adnl.node",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Full"
        },
        {
          "name": "addr_list",
          "type": "adnl.addressList"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "adnl.Node"
    },
    {
      "id": "3686828122",
      "predicate": "adnl.nodes",
      "params": [
        {
          "name": "nodes",
          "type": "(vector"
        }
      ],
      "type": "adnl.Nodes"
    },
    {
      "id": "69996134",
      "predicate": "adnl.packetHeader.secp256k1",
      "params": [
        {
          "name": "dst",
          "type": "int256"
        },
        {
          "name": "point",
          "type": "int256"
        }
      ],
      "type": "adnl.PacketHeader"
    },
    {
      "id": "3231431465",
      "predicate": "adnl.packetHeader.unenc",
      "params": [
        {
          "name": "dst",
          "type": "int256"
        }
      ],
      "type": "adnl.PacketHeader"
    },
    {
      "id": "810999805",
      "predicate": "adnl.packetHeader.channel",
      "params": [
        {
          "name": "dst",
          "type": "int256"
        },
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "adnl.PacketHeader"
    },
    {
      "id": "2634021821",
      "predicate": "signature",
      "params": [
        {
          "name": "rand2",
          "type": "bytes"
        }
      ],
      "type": "adnl.PacketContents"
    },
    {
      "id": "3165316688",
      "predicate": "adnl.message.packet",
      "params": [
        {
          "name": "packet",
          "type": "bytes"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "3866346427",
      "predicate": "adnl.message.createChannel",
      "params": [
        {
          "name": "key",
          "type": "int256"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "1625103721",
      "predicate": "adnl.message.confirmChannel",
      "params": [
        {
          "name": "key",
          "type": "int256"
        },
        {
          "name": "peer_key",
          "type": "int256"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "541595893",
      "predicate": "adnl.message.custom",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "402186202",
      "predicate": "adnl.message.nop",
      "params": [],
      "type": "adnl.Message"
    },
    {
      "id": "281150752",
      "predicate": "adnl.message.reinit",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "3029072250",
      "predicate": "adnl.message.query",
      "params": [
        {
          "name": "query_id",
          "type": "int256"
        },
        {
          "name": "query",
          "type": "bytes"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "262964246",
      "predicate": "adnl.message.answer",
      "params": [
        {
          "name": "query_id",
          "type": "int256"
        },
        {
          "name": "answer",
          "type": "bytes"
        }
      ],
      "type": "adnl.Message"
    },
    {
      "id": "163394346",
      "predicate": "rldp.messagePart",
      "params": [
        {
          "name": "transfer_id",
          "type": "int256"
        },
        {
          "name": "fer_type",
          "type": "fer.Type"
        },
        {
          "name": "part",
          "type": "int"
        },
        {
          "name": "total_size",
          "type": "long"
        },
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "rldp.MessagePart"
    },
    {
      "id": "4118994008",
      "predicate": "rldp.confirm",
      "params": [
        {
          "name": "transfer_id",
          "type": "int256"
        },
        {
          "name": "part",
          "type": "int"
        },
        {
          "name": "seqno",
          "type": "int"
        }
      ],
      "type": "rldp.MessagePart"
    },
    {
      "id": "3154948799",
      "predicate": "rldp.complete",
      "params": [
        {
          "name": "transfer_id",
          "type": "int256"
        },
        {
          "name": "part",
          "type": "int"
        }
      ],
      "type": "rldp.MessagePart"
    },
    {
      "id": "2098973982",
      "predicate": "rldp.message",
      "params": [
        {
          "name": "id",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "rldp.Message"
    },
    {
      "id": "3724565156",
      "predicate": "rldp.query",
      "params": [
        {
          "name": "query_id",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "rldp.Message"
    },
    {
      "id": "2751224835",
      "predicate": "rldp.answer",
      "params": [
        {
          "name": "query_id",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "rldp.Message"
    },
    {
      "id": "1725249223",
      "predicate": "dht.node",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Full"
        },
        {
          "name": "addr_list",
          "type": "adnl.addressList"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "dht.Node"
    },
    {
      "id": "4012022377",
      "predicate": "dht.nodes",
      "params": [
        {
          "name": "nodes",
          "type": "(vector"
        }
      ],
      "type": "dht.Nodes"
    },
    {
      "id": "4134002319",
      "predicate": "dht.key",
      "params": [
        {
          "name": "id",
          "type": "int256"
        },
        {
          "name": "name",
          "type": "bytes"
        },
        {
          "name": "idx",
          "type": "int"
        }
      ],
      "type": "dht.Key"
    },
    {
      "id": "3432985079",
      "predicate": "dht.updateRule.signature",
      "params": [],
      "type": "dht.UpdateRule"
    },
    {
      "id": "1633127956",
      "predicate": "dht.updateRule.anybody",
      "params": [],
      "type": "dht.UpdateRule"
    },
    {
      "id": "392837202",
      "predicate": "dht.updateRule.nodes",
      "params": [
        {
          "name": "max_nodes",
          "type": "int"
        }
      ],
      "type": "dht.UpdateRule"
    },
    {
      "id": "3408670880",
      "predicate": "dht.updateRule.overlayNodes",
      "params": [
        {
          "name": "max_nodes",
          "type": "int"
        }
      ],
      "type": "dht.UpdateRule"
    },
    {
      "id": "862674694",
      "predicate": "dht.keyDescription",
      "params": [
        {
          "name": "key",
          "type": "dht.key"
        },
        {
          "name": "id",
          "type": "adnl.id.Full"
        },
        {
          "name": "update_rule",
          "type": "dht.UpdateRule"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "dht.KeyDescription"
    },
    {
      "id": "2427267019",
      "predicate": "dht.value",
      "params": [
        {
          "name": "key",
          "type": "dht.keyDescription"
        },
        {
          "name": "value",
          "type": "bytes"
        },
        {
          "name": "ttl",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "dht.Value"
    },
    {
      "id": "1519054721",
      "predicate": "dht.pong",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "dht.Pong"
    },
    {
      "id": "2724332904",
      "predicate": "dht.valueNotFound",
      "params": [
        {
          "name": "nodes",
          "type": "dht.nodes"
        }
      ],
      "type": "dht.ValueResult"
    },
    {
      "id": "3826055028",
      "predicate": "dht.valueFound",
      "params": [
        {
          "name": "value",
          "type": "dht.Value"
        }
      ],
      "type": "dht.ValueResult"
    },
    {
      "id": "1881602824",
      "predicate": "dht.stored",
      "params": [],
      "type": "dht.Stored"
    },
    {
      "id": "3154959246",
      "predicate": "dht.message",
      "params": [
        {
          "name": "node",
          "type": "dht.node"
        }
      ],
      "type": "dht.Message"
    },
    {
      "id": "3010046386",
      "predicate": "overlay.node",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Full"
        },
        {
          "name": "overlay",
          "type": "int256"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "overlay.Node"
    },
    {
      "id": "1943272087",
      "predicate": "overlay.nodes",
      "params": [
        {
          "name": "nodes",
          "type": "(vector"
        }
      ],
      "type": "overlay.Nodes"
    },
    {
      "id": "1965368352",
      "predicate": "overlay.message",
      "params": [
        {
          "name": "overlay",
          "type": "int256"
        }
      ],
      "type": "overlay.Message"
    },
    {
      "id": "1228066845",
      "predicate": "overlay.broadcastList",
      "params": [
        {
          "name": "hashes",
          "type": "(vector"
        }
      ],
      "type": "overlay.BroadcastList"
    },
    {
      "id": "1733556588",
      "predicate": "overlay.fer.received",
      "params": [
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "3839747545",
      "predicate": "overlay.fer.completed",
      "params": [
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "1375565978",
      "predicate": "overlay.broadcast.id",
      "params": [
        {
          "name": "src",
          "type": "int256"
        },
        {
          "name": "data_hash",
          "type": "int256"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "overlay.broadcast.Id"
    },
    {
      "id": "2195443473",
      "predicate": "overlay.broadcastFer.id",
      "params": [
        {
          "name": "src",
          "type": "int256"
        },
        {
          "name": "type",
          "type": "int256"
        },
        {
          "name": "data_hash",
          "type": "int256"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "overlay.broadcastFer.Id"
    },
    {
      "id": "1727565791",
      "predicate": "overlay.broadcastFer.partId",
      "params": [
        {
          "name": "broadcast_hash",
          "type": "int256"
        },
        {
          "name": "data_hash",
          "type": "int256"
        },
        {
          "name": "seqno",
          "type": "int"
        }
      ],
      "type": "overlay.broadcastFer.PartId"
    },
    {
      "id": "4197928572",
      "predicate": "overlay.broadcast.toSign",
      "params": [
        {
          "name": "hash",
          "type": "int256"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "overlay.broadcast.ToSign"
    },
    {
      "id": "2582802054",
      "predicate": "overlay.certificate",
      "params": [
        {
          "name": "issued_by",
          "type": "adnl.id.Full"
        },
        {
          "name": "expire_at",
          "type": "int"
        },
        {
          "name": "max_size",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "overlay.Certificate"
    },
    {
      "id": "853195983",
      "predicate": "overlay.emptyCertificate",
      "params": [],
      "type": "overlay.Certificate"
    },
    {
      "id": "2410569913",
      "predicate": "overlay.certificateId",
      "params": [
        {
          "name": "overlay_id",
          "type": "int256"
        },
        {
          "name": "node",
          "type": "int256"
        },
        {
          "name": "expire_at",
          "type": "int"
        },
        {
          "name": "max_size",
          "type": "int"
        }
      ],
      "type": "overlay.CertificateId"
    },
    {
      "id": "861097508",
      "predicate": "overlay.unicast",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "1952835017",
      "predicate": "overlay.broadcast",
      "params": [
        {
          "name": "src",
          "type": "adnl.id.Full"
        },
        {
          "name": "certificate",
          "type": "overlay.Certificate"
        },
        {
          "name": "flags",
          "type": "int"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "2352329727",
      "predicate": "data",
      "params": [
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "fer",
          "type": "fer.Type"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "1539003811",
      "predicate": "overlay.broadcastFerShort",
      "params": [
        {
          "name": "src",
          "type": "adnl.id.Full"
        },
        {
          "name": "certificate",
          "type": "overlay.Certificate"
        },
        {
          "name": "broadcast_hash",
          "type": "int256"
        },
        {
          "name": "part_data_hash",
          "type": "int256"
        },
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "2508600868",
      "predicate": "overlay.broadcastNotFound",
      "params": [],
      "type": "overlay.Broadcast"
    },
    {
      "id": "620665018",
      "predicate": "catchain.block.id",
      "params": [
        {
          "name": "incarnation",
          "type": "int256"
        },
        {
          "name": "src",
          "type": "int256"
        },
        {
          "name": "height",
          "type": "int"
        },
        {
          "name": "data_hash",
          "type": "int256"
        }
      ],
      "type": "catchain.block.Id"
    },
    {
      "id": "1511706959",
      "predicate": "catchain.block.dep",
      "params": [
        {
          "name": "src",
          "type": "int"
        },
        {
          "name": "height",
          "type": "int"
        },
        {
          "name": "data_hash",
          "type": "int256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "catchain.block.Dep"
    },
    {
      "id": "1101660840",
      "predicate": "catchain.block.data",
      "params": [
        {
          "name": "prev",
          "type": "catchain.block.dep"
        },
        {
          "name": "deps",
          "type": "(vector"
        }
      ],
      "type": "catchain.block.Data"
    },
    {
      "id": "3595911540",
      "predicate": "catchain.block",
      "params": [
        {
          "name": "incarnation",
          "type": "int256"
        },
        {
          "name": "src",
          "type": "int"
        },
        {
          "name": "height",
          "type": "int"
        },
        {
          "name": "data",
          "type": "catchain.block.data"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "catchain.Block"
    },
    {
      "id": "3377394940",
      "predicate": "catchain.blocks",
      "params": [
        {
          "name": "blocks",
          "type": "(vector"
        }
      ],
      "type": "catchain.Blocks"
    },
    {
      "id": "593975492",
      "predicate": "catchain.blockUpdate",
      "params": [
        {
          "name": "block",
          "type": "catchain.block"
        }
      ],
      "type": "catchain.Update"
    },
    {
      "id": "3053607510",
      "predicate": "catchain.block.data.badBlock",
      "params": [
        {
          "name": "block",
          "type": "catchain.block"
        }
      ],
      "type": "catchain.block.inner.Data"
    },
    {
      "id": "1685731922",
      "predicate": "catchain.block.data.fork",
      "params": [
        {
          "name": "left",
          "type": "catchain.block.Dep"
        },
        {
          "name": "right",
          "type": "catchain.block.Dep"
        }
      ],
      "type": "catchain.block.inner.Data"
    },
    {
      "id": "1417852112",
      "predicate": "catchain.block.data.nop",
      "params": [],
      "type": "catchain.block.inner.Data"
    },
    {
      "id": "2379308600",
      "predicate": "catchain.block.data.vector",
      "params": [
        {
          "name": "msgs",
          "type": "(vector"
        }
      ],
      "type": "catchain.block.inner.Data"
    },
    {
      "id": "4146637440",
      "predicate": "catchain.firstblock",
      "params": [
        {
          "name": "unique_hash",
          "type": "int256"
        },
        {
          "name": "nodes",
          "type": "(vector"
        }
      ],
      "type": "catchain.FirstBlock"
    },
    {
      "id": "1277005897",
      "predicate": "catchain.difference",
      "params": [
        {
          "name": "sent_upto",
          "type": "(vector"
        }
      ],
      "type": "catchain.Difference"
    },
    {
      "id": "1227341935",
      "predicate": "catchain.differenceFork",
      "params": [
        {
          "name": "left",
          "type": "catchain.block.dep"
        },
        {
          "name": "right",
          "type": "catchain.block.dep"
        }
      ],
      "type": "catchain.Difference"
    },
    {
      "id": "3054569604",
      "predicate": "catchain.blockNotFound",
      "params": [],
      "type": "catchain.BlockResult"
    },
    {
      "id": "2636787783",
      "predicate": "catchain.blockResult",
      "params": [
        {
          "name": "block",
          "type": "catchain.block"
        }
      ],
      "type": "catchain.BlockResult"
    },
    {
      "id": "4210512303",
      "predicate": "catchain.sent",
      "params": [
        {
          "name": "cnt",
          "type": "int"
        }
      ],
      "type": "catchain.Sent"
    },
    {
      "id": "641231806",
      "predicate": "validatorSession.id",
      "params": [
        {
          "name": "slice",
          "type": "int256"
        },
        {
          "name": "start_time",
          "type": "int"
        },
        {
          "name": "end_time",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "(vector"
        }
      ],
      "type": "validatorSession.Id"
    },
    {
      "id": "2477989",
      "predicate": "validatorSession.round.id",
      "params": [
        {
          "name": "session",
          "type": "int256"
        },
        {
          "name": "height",
          "type": "long"
        },
        {
          "name": "prev_block",
          "type": "int256"
        },
        {
          "name": "seqno",
          "type": "int"
        }
      ],
      "type": "validatorSession.round.Id"
    },
    {
      "id": "3168223545",
      "predicate": "validatorSession.candidate.id",
      "params": [
        {
          "name": "round",
          "type": "int256"
        },
        {
          "name": "block_hash",
          "type": "int256"
        }
      ],
      "type": "validatorSession.tempBlock.Id"
    },
    {
      "id": "2527160017",
      "predicate": "validatorSession.message.startSession",
      "params": [],
      "type": "validatorSession.Message"
    },
    {
      "id": "3415941859",
      "predicate": "validatorSession.message.finishSession",
      "params": [],
      "type": "validatorSession.Message"
    },
    {
      "id": "3631491782",
      "predicate": "collated_data_file_hash",
      "params": [],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "1571844585",
      "predicate": "validatorSession.message.approvedBlock",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "candidate",
          "type": "int256"
        }
      ],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "2886901493",
      "predicate": "validatorSession.message.commit",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "candidate",
          "type": "int256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "2586988999",
      "predicate": "validatorSession.message.vote",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "attempt",
          "type": "int"
        },
        {
          "name": "candidate",
          "type": "int256"
        }
      ],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "2824123730",
      "predicate": "validatorSession.message.precommit",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "attempt",
          "type": "int"
        },
        {
          "name": "candidate",
          "type": "int256"
        }
      ],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "1243619241",
      "predicate": "validatorSession.message.empty",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "attempt",
          "type": "int"
        }
      ],
      "type": "validatorSession.round.Message"
    },
    {
      "id": "3703977837",
      "predicate": "validatorSession.pong",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "validatorSession.Pong"
    },
    {
      "id": "436135276",
      "predicate": "validatorSession.candidateId",
      "params": [
        {
          "name": "src",
          "type": "int256"
        },
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "file_hash",
          "type": "int256"
        },
        {
          "name": "collated_data_file_hash",
          "type": "int256"
        }
      ],
      "type": "validatorSession.CandidateId"
    },
    {
      "id": "3884377417",
      "predicate": "validatorSession.blockUpdate",
      "params": [
        {
          "name": "ts",
          "type": "long"
        },
        {
          "name": "actions",
          "type": "(vector"
        },
        {
          "name": "validatorSession.round.Message) state",
          "type": "int"
        }
      ],
      "type": "validatorSession.BlockUpdate"
    },
    {
      "id": "2100525125",
      "predicate": "validatorSession.candidate",
      "params": [
        {
          "name": "src",
          "type": "int256"
        },
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "collated_data",
          "type": "bytes"
        }
      ],
      "type": "validatorSession.Candidate"
    },
    {
      "id": "3479258140",
      "predicate": "hashable.bool",
      "params": [
        {
          "name": "value",
          "type": "Bool"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3551892310",
      "predicate": "hashable.int32",
      "params": [
        {
          "name": "value",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3889860162",
      "predicate": "hashable.int64",
      "params": [
        {
          "name": "value",
          "type": "long"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "975377359",
      "predicate": "hashable.int256",
      "params": [
        {
          "name": "value",
          "type": "int256"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "118742546",
      "predicate": "hashable.bytes",
      "params": [
        {
          "name": "value",
          "type": "bytes"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3353700501",
      "predicate": "hashable.pair",
      "params": [
        {
          "name": "left",
          "type": "int"
        },
        {
          "name": "right",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "1854625849",
      "predicate": "hashable.vector",
      "params": [
        {
          "name": "value",
          "type": "(vector"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "1479622531",
      "predicate": "hashable.validatorSessionOldRound",
      "params": [
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "block",
          "type": "int"
        },
        {
          "name": "signatures",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3739746403",
      "predicate": "hashable.validatorSessionRoundAttempt",
      "params": [
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "int"
        },
        {
          "name": "precommitted",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3252527850",
      "predicate": "approved_blocks",
      "params": [
        {
          "name": "signatures",
          "type": "int"
        },
        {
          "name": "attempts",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "937530018",
      "predicate": "hashable.blockSignature",
      "params": [
        {
          "name": "signature",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3183056171",
      "predicate": "hashable.sentBlock",
      "params": [
        {
          "name": "src",
          "type": "int"
        },
        {
          "name": "root_hash",
          "type": "int"
        },
        {
          "name": "file_hash",
          "type": "int"
        },
        {
          "name": "collated_data_file_hash",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "2666677935",
      "predicate": "hashable.sentBlockEmpty",
      "params": [],
      "type": "Hashable"
    },
    {
      "id": "2931764165",
      "predicate": "hashable.vote",
      "params": [
        {
          "name": "block",
          "type": "int"
        },
        {
          "name": "node",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "195670285",
      "predicate": "hashable.blockCandidate",
      "params": [
        {
          "name": "block",
          "type": "int"
        },
        {
          "name": "approved",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "1063025931",
      "predicate": "hashable.blockCandidateAttempt",
      "params": [
        {
          "name": "block",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "187199288",
      "predicate": "hashable.cntVector",
      "params": [
        {
          "name": "data",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "2073445977",
      "predicate": "hashable.cntSortedVector",
      "params": [
        {
          "name": "data",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "1746035669",
      "predicate": "hashable.validatorSession",
      "params": [
        {
          "name": "ts",
          "type": "int"
        },
        {
          "name": "old_rounds",
          "type": "int"
        },
        {
          "name": "cur_round",
          "type": "int"
        }
      ],
      "type": "Hashable"
    },
    {
      "id": "3414830962",
      "predicate": "tonNode.sessionId",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "utime_from",
          "type": "int"
        },
        {
          "name": "utime_to",
          "type": "int"
        }
      ],
      "type": "tonNode.SessionId"
    },
    {
      "id": "1357921331",
      "predicate": "tonNode.blockSignature",
      "params": [
        {
          "name": "who",
          "type": "int256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "type": "tonNode.BlockSignature"
    },
    {
      "id": "1733487480",
      "predicate": "tonNode.blockIdExt",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "file_hash",
          "type": "int256"
        }
      ],
      "type": "tonNode.BlockIdExt"
    },
    {
      "id": "494024110",
      "predicate": "tonNode.zeroStateIdExt",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "file_hash",
          "type": "int256"
        }
      ],
      "type": "tonNode.ZeroStateIdExt"
    },
    {
      "id": "2206510741",
      "predicate": "tonNode.blockDescriptionEmpty",
      "params": [],
      "type": "tonNode.BlockDescription"
    },
    {
      "id": "1185009800",
      "predicate": "tonNode.blockDescription",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.BlockDescription"
    },
    {
      "id": "3345596794",
      "predicate": "tonNode.preparedProofEmpty",
      "params": [],
      "type": "tonNode.PreparedProof"
    },
    {
      "id": "1235611381",
      "predicate": "tonNode.preparedProof",
      "params": [
        {
          "name": "masterchain_block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.PreparedProof"
    },
    {
      "id": "1040134797",
      "predicate": "tonNode.preparedProofLink",
      "params": [],
      "type": "tonNode.PreparedProof"
    },
    {
      "id": "928762733",
      "predicate": "tonNode.preparedState",
      "params": [],
      "type": "tonNode.PreparedState"
    },
    {
      "id": "842598993",
      "predicate": "tonNode.notFoundState",
      "params": [],
      "type": "tonNode.PreparedState"
    },
    {
      "id": "3938761677",
      "predicate": "tonNode.prepared",
      "params": [],
      "type": "tonNode.Prepared"
    },
    {
      "id": "3804446118",
      "predicate": "tonNode.notFound",
      "params": [],
      "type": "tonNode.Prepared"
    },
    {
      "id": "1443505284",
      "predicate": "tonNode.data",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "tonNode.Data"
    },
    {
      "id": "1161085703",
      "predicate": "tonNode.ihrMessage",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "tonNode.IhrMessage"
    },
    {
      "id": "3698696713",
      "predicate": "tonNode.externalMessage",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "tonNode.ExternalMessage"
    },
    {
      "id": "1375779283",
      "predicate": "tonNode.newShardBlock",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "tonNode.NewShardBlock"
    },
    {
      "id": "50214110",
      "predicate": "proof",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "tonNode.Broadcast"
    },
    {
      "id": "1381868723",
      "predicate": "tonNode.ihrMessageBroadcast",
      "params": [
        {
          "name": "message",
          "type": "tonNode.ihrMessage"
        }
      ],
      "type": "tonNode.Broadcast"
    },
    {
      "id": "1025185895",
      "predicate": "tonNode.externalMessageBroadcast",
      "params": [
        {
          "name": "message",
          "type": "tonNode.externalMessage"
        }
      ],
      "type": "tonNode.Broadcast"
    },
    {
      "id": "183696060",
      "predicate": "tonNode.newShardBlockBroadcast",
      "params": [
        {
          "name": "block",
          "type": "tonNode.newShardBlock"
        }
      ],
      "type": "tonNode.Broadcast"
    },
    {
      "id": "3802631385",
      "predicate": "tonNode.shardPublicOverlayId",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        }
      ],
      "type": "tonNode.ShardPublicOverlayId"
    },
    {
      "id": "3305860720",
      "predicate": "ton.blockId",
      "params": [
        {
          "name": "root_cell_hash",
          "type": "int256"
        },
        {
          "name": "file_hash",
          "type": "int256"
        }
      ],
      "type": "ton.BlockId"
    },
    {
      "id": "3148472648",
      "predicate": "liteServer.error",
      "params": [
        {
          "name": "code",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "liteServer.Error"
    },
    {
      "id": "2875976589",
      "predicate": "test.validatorSession.block",
      "params": [
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "height",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "test.validatorSession.Block"
    },
    {
      "id": "1047318133",
      "predicate": "test0.blockSignatures",
      "params": [
        {
          "name": "signatures",
          "type": "(vector"
        }
      ],
      "type": "test0.BlockSignatures"
    },
    {
      "id": "5977373",
      "predicate": "test0.proofLink",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "prev",
          "type": "(vector"
        },
        {
          "name": "tonNode.blockIdExt) state",
          "type": "int256"
        },
        {
          "name": "split",
          "type": "Bool"
        }
      ],
      "type": "test.ProofLink"
    },
    {
      "id": "240739136",
      "predicate": "test0.proof",
      "params": [
        {
          "name": "link",
          "type": "test0.proofLink"
        },
        {
          "name": "catchain_seqno",
          "type": "int"
        },
        {
          "name": "validator_set_hash",
          "type": "int"
        },
        {
          "name": "signatures",
          "type": "test0.blockSignatures"
        }
      ],
      "type": "test.Proof"
    },
    {
      "id": "2501343924",
      "predicate": "test0.masterchainBlockExtra.empty",
      "params": [],
      "type": "test0.MasterchainBlockExtra"
    },
    {
      "id": "2207607192",
      "predicate": "test0.masterchainBlockExtra.extra",
      "params": [
        {
          "name": "randseed",
          "type": "int"
        },
        {
          "name": "rotate",
          "type": "Bool"
        },
        {
          "name": "shards",
          "type": "(vector"
        }
      ],
      "type": "test0.MasterchainBlockExtra"
    },
    {
      "id": "2803606173",
      "predicate": "test0.masterchainStateExtra.empty",
      "params": [],
      "type": "test0.MasterchainStateExtra"
    },
    {
      "id": "3428398789",
      "predicate": "test0.masterchainStateExtra.extra",
      "params": [
        {
          "name": "validator_ts",
          "type": "int"
        },
        {
          "name": "validator_randseed",
          "type": "int"
        },
        {
          "name": "next_randseed",
          "type": "int"
        },
        {
          "name": "next_rotate_at",
          "type": "int"
        },
        {
          "name": "prev_blocks",
          "type": "(vector"
        },
        {
          "name": "tonNode.blockIdExt) shards",
          "type": "(vector"
        },
        {
          "name": "test0.masterchain.shardInfo) pool",
          "type": "(vector"
        }
      ],
      "type": "test0.MasterchainStateExtra"
    },
    {
      "id": "949832535",
      "predicate": "catchain_seqno",
      "params": [
        {
          "name": "validator_set_hash",
          "type": "int"
        },
        {
          "name": "pad",
          "type": "bytes"
        },
        {
          "name": "extra",
          "type": "test0.MasterchainBlockExtra"
        }
      ],
      "type": "test.shardchain.Block"
    },
    {
      "id": "2475464859",
      "predicate": "test0.shardchain.state",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "ts",
          "type": "int"
        },
        {
          "name": "split",
          "type": "Bool"
        },
        {
          "name": "extra",
          "type": "test0.MasterchainStateExtra"
        }
      ],
      "type": "test.shardchain.State"
    },
    {
      "id": "1500097366",
      "predicate": "catchain_seqno",
      "params": [
        {
          "name": "validator_set_hash",
          "type": "int"
        },
        {
          "name": "signatures",
          "type": "bytes"
        }
      ],
      "type": "test0.TopShardBlockDescription"
    },
    {
      "id": "2599107127",
      "predicate": "test0.validatorSessionId",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "shard_from",
          "type": "long"
        },
        {
          "name": "ts",
          "type": "int"
        }
      ],
      "type": "test0.ValidatorSessionId"
    },
    {
      "id": "408501132",
      "predicate": "test0.validatorSetItem",
      "params": [
        {
          "name": "id",
          "type": "int256"
        },
        {
          "name": "weight",
          "type": "long"
        }
      ],
      "type": "test0.ValidatorSetItem"
    },
    {
      "id": "384718282",
      "predicate": "test0.validatorSet",
      "params": [
        {
          "name": "ts",
          "type": "int"
        },
        {
          "name": "validators",
          "type": "(vector"
        }
      ],
      "type": "test0.ValidatorSet"
    },
    {
      "id": "3870286899",
      "predicate": "test0.extMessage",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "test0.ExtMessage"
    },
    {
      "id": "3021501427",
      "predicate": "db.root.dbDescription",
      "params": [
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "first_masterchain_block_id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "db.root.DbDescription"
    },
    {
      "id": "1928966974",
      "predicate": "db.root.key.cellDb",
      "params": [
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "db.root.Key"
    },
    {
      "id": "806534976",
      "predicate": "db.root.key.blockDb",
      "params": [
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "db.root.Key"
    },
    {
      "id": "3591471777",
      "predicate": "db.root.config",
      "params": [
        {
          "name": "celldb_version",
          "type": "int"
        },
        {
          "name": "blockdb_version",
          "type": "int"
        }
      ],
      "type": "db.root.Config"
    },
    {
      "id": "331559556",
      "predicate": "db.root.key.config",
      "params": [],
      "type": "db.root.Key"
    },
    {
      "id": "1409155988",
      "predicate": "db.celldb.value",
      "params": [
        {
          "name": "next",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "db.celldb.Value"
    },
    {
      "id": "3135170049",
      "predicate": "db.celldb.key.value",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.celldb.key.Value"
    },
    {
      "id": "957504263",
      "predicate": "state",
      "params": [],
      "type": "db.block.Info"
    },
    {
      "id": "543128145",
      "predicate": "db.block.archivedInfo",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "next",
          "type": "flags.0?tonNode.blockIdExt"
        }
      ],
      "type": "db.block.Info"
    },
    {
      "id": "2995700781",
      "predicate": "db.blockdb.value",
      "params": [
        {
          "name": "next",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "db.blockdb.Value"
    },
    {
      "id": "609613467",
      "predicate": "db.blockdb.key.value",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.blockdb.key.Value"
    },
    {
      "id": "3739664055",
      "predicate": "db.filedb.value",
      "params": [
        {
          "name": "next",
          "type": "db.filedb.Key"
        },
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "db.filedb.Value"
    },
    {
      "id": "329181652",
      "predicate": "db.candidate",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "collated_data",
          "type": "bytes"
        }
      ],
      "type": "db.Candidate"
    },
    {
      "id": "3732035540",
      "predicate": "db.candidate.id",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "collated_data_file_hash",
          "type": "int256"
        }
      ],
      "type": "db.candidate.Id"
    },
    {
      "id": "2080319307",
      "predicate": "db.filedb.key.empty",
      "params": [],
      "type": "db.filedb.Key"
    },
    {
      "id": "2968183921",
      "predicate": "db.filedb.key.blockFile",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "2589567697",
      "predicate": "db.filedb.key.stateFile",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "1817477977",
      "predicate": "db.filedb.key.shardStateFile",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "masterchain_block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "3667217900",
      "predicate": "db.filedb.key.proof",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "2566637006",
      "predicate": "db.filedb.key.proofLink",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "3609791755",
      "predicate": "db.filedb.key.signatures",
      "params": [
        {
          "name": "block_id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "3800697529",
      "predicate": "db.filedb.key.candidate",
      "params": [
        {
          "name": "id",
          "type": "db.candidate.id"
        }
      ],
      "type": "db.filedb.Key"
    },
    {
      "id": "553727962",
      "predicate": "db.state.destroyedSessions",
      "params": [
        {
          "name": "sessions",
          "type": "(vector"
        }
      ],
      "type": "db.state.DestroyedSessions"
    },
    {
      "id": "1932303605",
      "predicate": "db.state.initBlockId",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.state.InitBlockId"
    },
    {
      "id": "186033821",
      "predicate": "db.state.shardClient",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "db.state.ShardClient"
    },
    {
      "id": "3908563289",
      "predicate": "db.state.key.destroyedSessions",
      "params": [],
      "type": "db.state.Key"
    },
    {
      "id": "1971484899",
      "predicate": "db.state.key.initBlockId",
      "params": [],
      "type": "db.state.Key"
    },
    {
      "id": "1602154616",
      "predicate": "db.state.key.shardClient",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        }
      ],
      "type": "db.state.Key"
    },
    {
      "id": "993556028",
      "predicate": "id.config.local",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Pk"
        },
        {
          "name": "addr_list",
          "type": "adnl.addressList"
        }
      ],
      "type": "id.config.Local"
    },
    {
      "id": "1981827695",
      "predicate": "dht.config.local",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.short"
        }
      ],
      "type": "dht.config.Local"
    },
    {
      "id": "1584494022",
      "predicate": "dht.config.random.local",
      "params": [
        {
          "name": "cnt",
          "type": "int"
        },
        {
          "name": "addr_list",
          "type": "adnl.addressList"
        }
      ],
      "type": "dht.config.Local"
    },
    {
      "id": "784541096",
      "predicate": "overlay.config.local",
      "params": [
        {
          "name": "name",
          "type": "bytes"
        },
        {
          "name": "id",
          "type": "adnl.id.short"
        }
      ],
      "type": "overlay.config.Local"
    },
    {
      "id": "688042922",
      "predicate": "overlay.config.random.local",
      "params": [
        {
          "name": "cnt",
          "type": "int"
        },
        {
          "name": "name",
          "type": "bytes"
        },
        {
          "name": "addr_list",
          "type": "adnl.addressList"
        }
      ],
      "type": "overlay.config.Local"
    },
    {
      "id": "1394037726",
      "predicate": "catchain.config.local",
      "params": [
        {
          "name": "tag",
          "type": "int256"
        },
        {
          "name": "id",
          "type": "adnl.id.short"
        }
      ],
      "type": "catchain.config.Local"
    },
    {
      "id": "1129790198",
      "predicate": "liteserver.config.local",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Pk"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "liteserver.config.Local"
    },
    {
      "id": "3074613095",
      "predicate": "dummyworkchain0.config.local",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.short"
        }
      ],
      "type": "dummyworkchain0.config.Local"
    },
    {
      "id": "1716256616",
      "predicate": "validator.config.local",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.short"
        }
      ],
      "type": "validator.config.Local"
    },
    {
      "id": "2588987802",
      "predicate": "config.local",
      "params": [
        {
          "name": "udp_ports",
          "type": "(vector"
        },
        {
          "name": "int) tcp_ports",
          "type": "(vector"
        },
        {
          "name": "int) local_ids",
          "type": "(vector"
        },
        {
          "name": "id.config.local) dht",
          "type": "(vector"
        },
        {
          "name": "dht.config.Local) public_overlays",
          "type": "(vector"
        },
        {
          "name": "overlay.config.Local) catchains",
          "type": "(vector"
        },
        {
          "name": "catchain.config.local) dummy0",
          "type": "(vector"
        },
        {
          "name": "dummyworkchain0.config.local) validators",
          "type": "(vector"
        },
        {
          "name": "validator.config.local) liteservers",
          "type": "(vector"
        }
      ],
      "type": "config.Local"
    },
    {
      "id": "2228144647",
      "predicate": "dht.config.global",
      "params": [
        {
          "name": "static_nodes",
          "type": "dht.nodes"
        },
        {
          "name": "k",
          "type": "int"
        },
        {
          "name": "a",
          "type": "int"
        }
      ],
      "type": "dht.config.Global"
    },
    {
      "id": "3194978512",
      "predicate": "adnl.config.global",
      "params": [
        {
          "name": "static_nodes",
          "type": "adnl.nodes"
        }
      ],
      "type": "adnl.config.Global"
    },
    {
      "id": "2972194004",
      "predicate": "catchain.config.global",
      "params": [
        {
          "name": "tag",
          "type": "int256"
        },
        {
          "name": "nodes",
          "type": "(vector"
        }
      ],
      "type": "catchain.config.Global"
    },
    {
      "id": "4009074868",
      "predicate": "liteclient.config.global",
      "params": [
        {
          "name": "id",
          "type": "adnl.id.Full"
        },
        {
          "name": "ip",
          "type": "int"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "liteserver.config.Global"
    },
    {
      "id": "3663818451",
      "predicate": "dummyworkchain0.config.global",
      "params": [
        {
          "name": "zero_state_hash",
          "type": "int256"
        }
      ],
      "type": "dummyworkchain0.config.Global"
    },
    {
      "id": "2769321747",
      "predicate": "validator.config.global",
      "params": [
        {
          "name": "zero_state_root_hash",
          "type": "int256"
        },
        {
          "name": "zero_state_file_hash",
          "type": "int256"
        }
      ],
      "type": "validator.config.Global"
    },
    {
      "id": "3383426676",
      "predicate": "validators",
      "params": [
        {
          "name": "validator.config.global) liteclients",
          "type": "(vector"
        }
      ],
      "type": "config.Global"
    },
    {
      "id": "1973478085",
      "predicate": "liteServer.accountId",
      "params": [
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int256"
        }
      ],
      "type": "liteServer.AccountId"
    },
    {
      "id": "2239965313",
      "predicate": "liteServer.masterchainInfo",
      "params": [
        {
          "name": "last",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "state_root_hash",
          "type": "int256"
        },
        {
          "name": "init",
          "type": "tonNode.zeroStateIdExt"
        }
      ],
      "type": "liteServer.MasterchainInfo"
    },
    {
      "id": "3914530829",
      "predicate": "liteServer.currentTime",
      "params": [
        {
          "name": "now",
          "type": "int"
        }
      ],
      "type": "liteServer.CurrentTime"
    },
    {
      "id": "2775903596",
      "predicate": "liteServer.blockData",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "liteServer.BlockData"
    },
    {
      "id": "2880297996",
      "predicate": "liteServer.blockState",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "root_hash",
          "type": "int256"
        },
        {
          "name": "file_hash",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "liteServer.BlockState"
    },
    {
      "id": "961602967",
      "predicate": "liteServer.sendMsgStatus",
      "params": [
        {
          "name": "status",
          "type": "int"
        }
      ],
      "type": "liteServer.SendMsgStatus"
    },
    {
      "id": "1887029073",
      "predicate": "liteServer.accountState",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "shardblk",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "shard_proof",
          "type": "bytes"
        },
        {
          "name": "proof",
          "type": "bytes"
        },
        {
          "name": "state",
          "type": "bytes"
        }
      ],
      "type": "liteServer.AccountState"
    },
    {
      "id": "2682703236",
      "predicate": "liteServer.shardInfo",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "shardblk",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "shard_proof",
          "type": "bytes"
        },
        {
          "name": "shard_descr",
          "type": "bytes"
        }
      ],
      "type": "liteServer.ShardInfo"
    },
    {
      "id": "160425773",
      "predicate": "liteServer.allShardsInfo",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "proof",
          "type": "bytes"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "liteServer.AllShardsInfo"
    },
    {
      "id": "1564493619",
      "predicate": "liteServer.debug.verbosity",
      "params": [
        {
          "name": "value",
          "type": "int"
        }
      ],
      "type": "liteServer.debug.Verbosity"
    }
  ],
  "methods": [
    {
      "id": "1292381082",
      "method": "tcp.ping",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "tcp.Pong"
    },
    {
      "id": "197109379",
      "method": "getTestObject",
      "params": [],
      "type": "TestObject"
    },
    {
      "id": "3421191960",
      "method": "dht.ping",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "dht.Pong"
    },
    {
      "id": "882065938",
      "method": "dht.store",
      "params": [
        {
          "name": "value",
          "type": "dht.value"
        }
      ],
      "type": "dht.Stored"
    },
    {
      "id": "1826803307",
      "method": "dht.findNode",
      "params": [
        {
          "name": "key",
          "type": "int256"
        },
        {
          "name": "k",
          "type": "int"
        }
      ],
      "type": "dht.Nodes"
    },
    {
      "id": "2924175377",
      "method": "dht.findValue",
      "params": [
        {
          "name": "key",
          "type": "int256"
        },
        {
          "name": "k",
          "type": "int"
        }
      ],
      "type": "dht.ValueResult"
    },
    {
      "id": "960283782",
      "method": "dht.getSignedAddressList",
      "params": [],
      "type": "adnl.Node"
    },
    {
      "id": "2102593385",
      "method": "dht.query",
      "params": [
        {
          "name": "node",
          "type": "dht.node"
        }
      ],
      "type": "True"
    },
    {
      "id": "1223582891",
      "method": "overlay.getRandomPeers",
      "params": [
        {
          "name": "peers",
          "type": "overlay.nodes"
        }
      ],
      "type": "overlay.Nodes"
    },
    {
      "id": "3439166531",
      "method": "overlay.query",
      "params": [
        {
          "name": "overlay",
          "type": "int256"
        }
      ],
      "type": "True"
    },
    {
      "id": "758510240",
      "method": "overlay.getBroadcast",
      "params": [
        {
          "name": "hash",
          "type": "int256"
        }
      ],
      "type": "overlay.Broadcast"
    },
    {
      "id": "1109141562",
      "method": "overlay.getBroadcastList",
      "params": [
        {
          "name": "list",
          "type": "overlay.broadcastList"
        }
      ],
      "type": "overlay.BroadcastList"
    },
    {
      "id": "155049336",
      "method": "catchain.getBlock",
      "params": [
        {
          "name": "block",
          "type": "int256"
        }
      ],
      "type": "catchain.BlockResult"
    },
    {
      "id": "4123453460",
      "method": "catchain.getBlocks",
      "params": [
        {
          "name": "blocks",
          "type": "(vector"
        }
      ],
      "type": "catchain.Sent"
    },
    {
      "id": "3118541078",
      "method": "catchain.getDifference",
      "params": [
        {
          "name": "rt",
          "type": "(vector"
        }
      ],
      "type": "catchain.Difference"
    },
    {
      "id": "1022088985",
      "method": "catchain.getBlockHistory",
      "params": [
        {
          "name": "block",
          "type": "int256"
        },
        {
          "name": "height",
          "type": "long"
        },
        {
          "name": "stop_if",
          "type": "(vector"
        }
      ],
      "type": "catchain.Sent"
    },
    {
      "id": "1745111469",
      "method": "validatorSession.ping",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "validatorSession.Pong"
    },
    {
      "id": "3774692853",
      "method": "validatorSession.downloadCandidate",
      "params": [
        {
          "name": "round",
          "type": "int"
        },
        {
          "name": "id",
          "type": "validatorSession.candidateId"
        }
      ],
      "type": "validatorSession.Candidate"
    },
    {
      "id": "341160179",
      "method": "tonNode.getNextBlockDescription",
      "params": [
        {
          "name": "prev_block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.BlockDescription"
    },
    {
      "id": "2270966536",
      "method": "tonNode.prepareBlockProof",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "allow_partial",
          "type": "Bool"
        }
      ],
      "type": "tonNode.PreparedProof"
    },
    {
      "id": "1973649230",
      "method": "tonNode.prepareBlock",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.Prepared"
    },
    {
      "id": "3913798961",
      "method": "tonNode.prepareState",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.PreparedState"
    },
    {
      "id": "3799153091",
      "method": "tonNode.downloadBlock",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.Data"
    },
    {
      "id": "3556718684",
      "method": "tonNode.downloadState",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.Data"
    },
    {
      "id": "1272334218",
      "method": "tonNode.downloadBlockProof",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.Data"
    },
    {
      "id": "632488134",
      "method": "tonNode.downloadBlockProofLink",
      "params": [
        {
          "name": "block",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "tonNode.Data"
    },
    {
      "id": "2310399534",
      "method": "liteServer.getMasterchainInfo",
      "params": [],
      "type": "liteServer.MasterchainInfo"
    },
    {
      "id": "380459572",
      "method": "liteServer.getTime",
      "params": [],
      "type": "liteServer.CurrentTime"
    },
    {
      "id": "1668796173",
      "method": "liteServer.getBlock",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "liteServer.BlockData"
    },
    {
      "id": "3127783094",
      "method": "liteServer.getState",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "liteServer.BlockState"
    },
    {
      "id": "1762317442",
      "method": "liteServer.sendMessage",
      "params": [
        {
          "name": "body",
          "type": "bytes"
        }
      ],
      "type": "liteServer.SendMsgStatus"
    },
    {
      "id": "1804144165",
      "method": "liteServer.getAccountState",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "account",
          "type": "liteServer.accountId"
        }
      ],
      "type": "liteServer.AccountState"
    },
    {
      "id": "1411464942",
      "method": "liteServer.getShardInfo",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        },
        {
          "name": "workchain",
          "type": "int"
        },
        {
          "name": "shard",
          "type": "long"
        }
      ],
      "type": "liteServer.ShardInfo"
    },
    {
      "id": "1960050027",
      "method": "liteServer.getAllShardsInfo",
      "params": [
        {
          "name": "id",
          "type": "tonNode.blockIdExt"
        }
      ],
      "type": "liteServer.AllShardsInfo"
    },
    {
      "id": "462775286",
      "method": "liteServer.debug.setVerbosity",
      "params": [
        {
          "name": "verbosity",
          "type": "liteServer.debug.verbosity"
        }
      ],
      "type": "liteServer.debug.Verbosity"
    },
    {
      "id": "2039219935",
      "method": "liteServer.query",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "Object"
    }
  ]
}