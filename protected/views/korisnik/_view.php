<?php
/* @var $this KorisnikController */
/* @var $data Korisnik */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idKorisnik')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idKorisnik), array('view', 'id'=>$data->idKorisnik)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('korisnickoIme')); ?>:</b>
	<?php echo CHtml::encode($data->korisnickoIme); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('sifra')); ?>:</b>
	<?php echo CHtml::encode($data->sifra); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('email')); ?>:</b>
	<?php echo CHtml::encode($data->email); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('tip')); ?>:</b>
	<?php echo CHtml::encode($data->tip); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('aktivan')); ?>:</b>
	<?php echo CHtml::encode($data->aktivan); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('banovan')); ?>:</b>
	<?php echo CHtml::encode($data->banovan); ?>
	<br />


</div>