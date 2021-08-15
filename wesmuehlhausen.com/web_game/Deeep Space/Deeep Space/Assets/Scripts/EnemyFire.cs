using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyFire : MonoBehaviour
{
    public GameObject gameObj;
    public GameObject bulletPrefab;
    public float distance = 0;
    public float coolDown = 0;

    void Update()
    {
        distance = Vector3.Distance(gameObj.transform.position, transform.position);
        if (distance < 10 && coolDown <= 0)
        {
            Instantiate(bulletPrefab, transform.position, transform.rotation);
        }

    }

}
