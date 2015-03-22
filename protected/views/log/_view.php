<?php
/* @var $this LogController */
/* @var $data Log */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idLog')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idLog), array('view', 'id'=>$data->idLog)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('vrijemeLogiranja')); ?>:</b>
	<?php echo CHtml::encode($data->vrijemeLogiranja); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('ipAdresa')); ?>:</b>
	<?php echo CHtml::encode($data->ipAdresa); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik); ?>
	<br />


</div>