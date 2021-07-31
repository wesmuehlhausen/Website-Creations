using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyMoveForward : MonoBehaviour
{

    public float movementSpeed = 3f;
    public GameObject gameObj;
    public float distance = 0;

    

    void Update()
    {
        distance = Vector3.Distance(gameObj.transform.position, transform.position);
        if (distance > 6.4)
        {
            Vector3 shipPos = transform.position;
            Vector3 shipVelocity = new Vector3(0, movementSpeed * Time.deltaTime, 0);
            shipPos += transform.rotation * shipVelocity;
            transform.position = shipPos;        
        }

    }

}
